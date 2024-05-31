<?php

namespace App\Observers;

use App\Models\Conversation;
use App\Models\Group;
use App\Models\Message;
use Illuminate\Support\Facades\Storage;

class MessageObserver
{
    // listen when message is deleted
    public function deleting(Message $message)
    {
        // iterate over the message's attachments and delete them from file system
        $message->attachments->each(function ($attachment) {
            // delete attachment file from FS saved on public disk
            $dir = dirname($attachment->path);
            Storage::disk('public')->deleteDirectory($dir);
        });

        // delete all attachments related to the message from DB
        $message->attachments()->delete();

        // update Group and Conversation's last message if the message is the last message
        if ($message->group_id) {
            $group = Group::where('last_message_id', $message->id)->first();

            if ($group) { // message was the last message in this group
                $prevMessage = Message::where('group_id', $message->group_id)
                    ->where('id', '!=', $message->id)
                    ->latest()
                    ->limit(1)
                    ->first();
                if ($prevMessage) {
                    $group->last_message_id = $prevMessage->id;
                    $group->save();
                }
            }
        } else {
            $conversation = Conversation::where('last_message_id', $message->id)->first();

            if ($conversation) { // message was the last message in this conversation
                $prevMessage = Message::where(function ($query) use ($message) {
                    $query->where('sender_id', $message->sender_id)
                        ->where('receiver_id', $message->receiver_id)
                        ->orWhere('sender_id', $message->receiver_id)
                        ->where('receiver_id', $message->sender_id);
                })
                    ->where('id', '!=', $message->id)
                    ->latest()
                    ->limit(1)
                    ->first();
                if ($prevMessage) {
                    $conversation->last_message_id = $prevMessage->id;
                    $conversation->save();
                }
            }
        }
    }
}
