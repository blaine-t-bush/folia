<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

use App\Models\ReactionType;

class CreateReactionTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reaction_types', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->timestamps();
        });

        DB::table('reaction_types')->insert([
            ['id' => 'smile'],
            ['id' => 'frown'],
            ['id' => 'heart'],
            ['id' => 'laugh'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reaction_types');
    }
}
