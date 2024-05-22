## About

Real Time Messaging application for learning purposes. Based on tutor video from the best tutorial YT channel
<img src="https://yt3.ggpht.com/ytc/AIdro_limu16Q9lMj8k4k_ACSqUXKHZYsJothlIQl1qrzMFw7TE=s88-c-k-c0x00ffffff-no-rj" title="The Codeholic YT channel" width="40"/>
"[The Codeholic](https://www.youtube.com/@TheCodeholic)"

### Installing kit and dependencies

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


### App Models & Migrations:
* `php artisan make:model Group -m`
* `php artisan make:model Conversation -m`
* `php artisan make:model Message -m`
* `php artisan make:model MessageAttachment -m`
