<?php

namespace Alisincar\RsDocsTheme;

use BinaryTorch\LaRecipe\LaRecipe;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        LaRecipe::style('rs', __DIR__.'/../resources/css/theme.css');
        LaRecipe::script('rs', __DIR__.'/../resources/js/theme.js');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
