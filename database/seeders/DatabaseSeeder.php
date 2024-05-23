<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\Group;
use App\Models\Message;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     * @throws \Exception
     */
    public function run(): void
    {
        // create admin and other (non-admin) users:
        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
            'is_admin' => true,
        ]);
        User::factory()->create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'password' => bcrypt('password'),
        ]);
        User::factory(10)->create();

        // create random user groups:
        for ($i = 0; $i < 5; $i++) {
            $group = Group::factory()->create([
                'owner_id' => 1,
            ]);
            $users = User::inRandomOrder()->limit(random_int(2, 5))->pluck('id');
            $group->users()->attach(array_unique([1, ...$users]));
        }

        // create messages:
        Message::factory(1000)->create();
        // grab user-to-user messages:
        $messages = Message::whereNull('group_id')->orderBy('created_at')->get();

        // fill unique user-to-user conversations:
        $conversations = $messages->groupBy(function ($message) {
            return collect([$message->sender_id, $message->receiver_id])
                ->sort()->implode('_');
        })->map(function ($groupedMessages) {
            return [
                'user_id1' => $groupedMessages->first()->sender_id,
                'user_id2' => $groupedMessages->first()->receiver_id,
                'last_message_id' => $groupedMessages->last()->id,
                'created_at' => new Carbon(),
                'updated_at' => new Carbon(),
            ];
        })->values();

        Conversation::insertOrIgnore($conversations->toArray());
    }
}
