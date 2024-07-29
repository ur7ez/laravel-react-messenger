## About

Real time messaging application for learning purposes. Uses Laravel 11 with Breeze starter kit and React and Tailwindcss for frontend. Laravel Reverb is used as a choice for Web Socket server.

Based on tutor video from the best Laravel tutorials YT Channel
**_[The Codeholic](https://www.youtube.com/@TheCodeholic)_**.

## Installing kit and dependencies

_Create a project_:
* `composer create-project laravel/laravel laravel-react-messenger`

_Add Laravel Breeze with React component_:
* `composer require laravel/breeze --dev`
* `php artisan breeze:install`
* `php artisan migrate`
* `npm install`

_Adding extra packages_:
* `npm install @headlessui/react @heroicons/react emoji-picker-react react-markdown uuid`
* `npm install -D daisyui`

_Install broadcasting server with Laravel Reverb and Node dependencies_ (hit `yes` when asked).
* `php artisan install:broadcasting --force`

_Note_: if used a cloned project, be sure to copy `routes\channels.php` before, and replace newly generated file with contents from VCS. Also, you need to set `BROADCAST_CONNECTION=reverb` in `.env` file.

_Set link to public storage_:
* `php artisan storage:link`

_Generate application key (if used a clone)_:
* `php artisan key:generate`

### App Models & Migrations:
* `php artisan make:model Group -m`
* `php artisan make:model Conversation -m`
* `php artisan make:model Message -m`
* `php artisan make:model MessageAttachment -m`

### App Factories and seeders
* `php artisan make:factory GroupFactory`
* `php artisan make:factory MessageFactory`

_Run migrations and DB seeders:_
* `php artisan migrate:fresh --seed`

### App Controllers:
* `php artisan make:controller HomeController`
* `php artisan make:controller MessageController`
* `php artisan make:controller GroupController --requests --resource --model=Group`
* `php artisan make:controller UserController`

### Model Resources:
* `php artisan make:resource UserResource`
* `php artisan make:resource MessageResource`
* `php artisan make:resource MessageAttachmentResource`
* `php artisan make:resource GroupResource`

### Model Request classes:
* `php artisan make:request StoreMessageRequest`

### Access controll Middleware:
* `php artisan make:middleware AdminUser`
* `php artisan make:middleware ActiveUser`

### make Events to push information to browser:
* `php artisan make:event SocketMessage`
* `php artisan make:event GroupDeleted`


### make Observers and Jobs:
* `php artisan make:observer MessageObserver`
* `php artisan make:job DeleteGroupJob`

### Other stuff

run Laravel server & Vite server:
* `php artisan serve`
* `npm run dev`

start Laravel Reverb server:
* `php artisan reverb:start --debug`

**_Optional_**. Add IDE Helper Generator for Laravel
Run commands:
* `php artisan cache:clear`
* `composer require --dev barryvdh/laravel-ide-helper`

Then add PHPStorm Meta file:
* `php artisan ide-helper:meta`

You can now re-generate the docs yourself (for future updates):
* `php artisan ide-helper:generate`
* `php artisan ide-helper:models [-W]`

Note: _bootstrap/compiled.php_ has to be cleared first, so run `php artisan clear-compiled` before generating.
Read full docs at [Barry vd. Heuvel GitHub repo](https://github.com/barryvdh/laravel-ide-helper)
