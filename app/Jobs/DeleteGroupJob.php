<?php

namespace App\Jobs;

use App\Events\GroupDeleted;
use App\Models\Group;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DeleteGroupJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Group $group)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $id = $this->group->id;
        $name = $this->group->name;

        // delete last message id from the group (to remove FK)
        $this->group->last_message_id = null;
        $this->group->save();

        // iterate through messages and delete them (all message attachments will also be deleted)
        $this->group->messages->each->delete();

        // remove all users from the group
        $this->group->users()->detach();

        // delete group itself
        $this->group->delete();
        GroupDeleted::dispatch($id, $name);
    }
}
