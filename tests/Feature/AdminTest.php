<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_admin_can_access_to_his_dashboard()
    {
        $adminUser = User::factory()->create(['isAdmin' => true]);

        $response = $this->actingAs($adminUser)
            ->get('/admin');

        $response->assertStatus(200);
    }
}
