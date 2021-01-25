<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->timestamps();
            $table->string('hashed_password');
            $table->string('display_name');
            $table->string('authenticated_token')->nullable();
            $table->string('avatar_url')->default('/images/avatars/default_avatar_1.png');
            $table->boolean('is_default')->default(false);
            $table->boolean('is_custom')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
