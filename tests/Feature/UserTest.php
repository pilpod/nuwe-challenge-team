<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_I_can_add_user_in_db()
    {
        $user = User::factory()->create();

        $this->assertDatabaseCount('users', 1);
        $this->assertDatabaseHas('users', ['name' => $user->name]);
    }
}
