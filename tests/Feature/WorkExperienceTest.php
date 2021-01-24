<?php

namespace Tests\Feature;

use App\Models\WorkExperience;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WorkExperienceTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_I_can_add_work_experiences_in_db()
    {
        $user = User::factory()->create();
        WorkExperience::factory()->create(['user_id' => $user->id]);
        
        $result = $user->WorkExperiences()->get('position');

        $this->assertDatabaseCount('work_experiences', 1);
        $this->assertDatabaseHas('work_experiences', ['position' => $result[0]->position]);
    }
}
