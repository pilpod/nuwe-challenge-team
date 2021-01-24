<?php

namespace Database\Factories;

use App\Models\WorkExperience;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkExperienceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = WorkExperience::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'position' => $this->faker->text(50),
            'org_name' => $this->faker->text(255),
            'org_activity' => $this->faker->text(255),
            'description' => $this->faker->paragraph(5),
            'month_start' => $this->faker->monthName(),
            'year_start' => $this->faker->year(),
            'month_end' => $this->faker->monthName(),
            'year_end' => $this->faker->year(),
            'user_id' => $this->faker->numberBetween(1,3),
        ];
    }
}
