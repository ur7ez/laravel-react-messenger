## About

Real Time Messaging application for learning purposes. Based on tutor video from the best Laravel tutorials YT Channel
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

_Install laravel broadcasting server with Laravel Reverb and Node dependencies_ (hit yes when asked):
* `php artisan install:broadcasting`

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

### Model Resources:
* `php artisan make:resource UserResource`
* `php artisan make:resource MessageResource`
* `php artisan make:resource MessageAttachmentResource`

### Model Request classes:
* `php artisan make:request StoreMessageRequest`

### make Event to push information to browser:
* `php artisan make:event SocketMessage`


### make Observers for offline jobs:
* `php artisan make:observer MessageObserver`

### Other stuff

To start Laravel Reverb server run:
`php artisan reverb:start --debug`

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
