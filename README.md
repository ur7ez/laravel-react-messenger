## About

Real Time Messaging application for learning purposes. Based on tutor video from the best tutorial YT channel
<img src="https://yt3.ggpht.com/ytc/AIdro_limu16Q9lMj8k4k_ACSqUXKHZYsJothlIQl1qrzMFw7TE=s88-c-k-c0x00ffffff-no-rj" title="The Codeholic YT channel" width="40"/>
"[The Codeholic](https://www.youtube.com/@TheCodeholic)"

## Installing kit and dependencies

_Create a project_:
* `composer create-project laravel/laravel laravel-react-messenger`

_Add Laravel Breeze with React component_:
* `composer require laravel/breeze --dev`
* `php artisan breeze:install`
* `php artisan migrate`
* `npm install`

_Adding extra packages_:
* `npm install @headlessui/react @heroicons/react daisyui emoji-picker-react react-markdown uuid`

_Install laravel broadcasting server with Laravel Reverb and Node dependencies_ (hit yes when asked):
* `php artisan install:broadcasting`

### Optional. Add IDE Helper Generator for Laravel
Run commands:
* `php artisan cache:clear`
* `composer require --dev barryvdh/laravel-ide-helper`

Then add PHPStorm Meta file:
* `php artisan ide-helper:meta`

You can now re-generate the docs yourself (for future updates):
* `php artisan ide-helper:generate`

Note: _bootstrap/compiled.php_ has to be cleared first, so run `php artisan clear-compiled` before generating.
Read full docs at [Barry vd. Heuvel GitHub repo](https://github.com/barryvdh/laravel-ide-helper)

### App Models & Migrations:
* `php artisan make:model Group -m`
* `php artisan make:model Conversation -m`
* `php artisan make:model Message -m`
* `php artisan make:model MessageAttachment -m`

### App Factories and seeders
* `php artisan make:factory GroupFactory`
* `php artisan make:factory MessageFactory`
