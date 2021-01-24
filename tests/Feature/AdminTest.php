<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase;
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

    public function test_admin_can_view_user_list()
    {
        $adminUser = User::factory()->create(['isAdmin' => true]);

        $user = User::factory()->create();
        $userName = $user->name;

        $this->actingAs($adminUser)
            ->get('/admin')
            ->assertViewIs('admin-dashboard')
            ->assertSee($userName);
    }

    /** @test */
    public function test_admin_can_go_view_form_to_edit_user()
    {
        $userAdmin = User::factory()->create(['isAdmin' => true]);
        $user = User::factory()->create(['isAdmin' => false]);

        $response = $this->actingAs($userAdmin)
            ->get(route('admin.edit', $user->id))
            ->assertViewIs('edit-user');
            
        $response->assertSee($user->name);   
    }

    /** @test */
    public function test_admin_can_edit_user_profile()
    {
        // assertions
    }
    
    
}
