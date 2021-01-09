<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FoliaAuthenticationTest extends TestCase
{
    /** @test */
    public function loginPage() {
        // If no session, should see login form.
        // If session and no token match, should see login form.
        // If session and token match, should go to feed.
    }

    /** @test */
    public function registerPage() {
        // If invalid inputs, should go back to register page.
        // If valid inputs, should go to feed, user should be created, and token should match.
    }
}
