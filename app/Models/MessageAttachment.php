<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property int $message_id
 * @property string $name
 * @property string $path
 * @property string $mime
 * @property int $size
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment query()
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereMessageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereMime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MessageAttachment whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class MessageAttachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'message_id',
        'name',
        'path',
        'mime',
        'size',
    ];
}
