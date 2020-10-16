<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Character extends Component
{
    public $name;
    public $level;
    public $characterClass;
    public $vocation;
    public $hitPoints;
    public $attackValue;
    public $savingThrow;
    public $armorClass;
    public $movement;

    public $strengthScore;
    public $dexterityScore;
    public $constitutionScore;
    public $intelligenceScore;
    public $wisdomScore;
    public $charismaScore;

    public $strengthGroups;
    public $dexterityGroups;
    public $constitutionGroups;
    public $intelligenceGroups;
    public $wisdomGroups;
    public $charismaGroups;

    public $slotType;
    public $slots;

    public $inventory;

    public $notes;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($name, $level, $characterClass, $vocation, $hitPoints, $attackValue, $savingThrow, $armorClass, $movement,  $strengthScore, $dexterityScore, $constitutionScore, $intelligenceScore, $wisdomScore, $charismaScore, $strengthGroups, $dexterityGroups, $constitutionGroups, $intelligenceGroups, $wisdomGroups, $charismaGroups, $slotType, $slots, $inventory, $notes)
    {
        $this->name = $name;
        $this->level = $level;
        $this->characterClass = $characterClass;
        $this->vocation = $vocation;
        $this->hitPoints = $hitPoints;
        $this->attackValue = $attackValue;
        $this->savingThrow = $savingThrow;
        $this->armorClass = $armorClass;
        $this->movement = $movement;
    
        $this->strengthScore = $strengthScore;
        $this->dexterityScore = $dexterityScore;
        $this->constitutionScore = $constitutionScore;
        $this->intelligenceScore = $intelligenceScore;
        $this->wisdomScore = $wisdomScore;
        $this->charismaScore = $charismaScore;

        $this->strengthGroups = $strengthGroups;
        $this->dexterityGroups = $dexterityGroups;
        $this->constitutionGroups = $constitutionGroups;
        $this->intelligenceGroups = $intelligenceGroups;
        $this->wisdomGroups = $wisdomGroups;
        $this->charismaGroups = $charismaGroups;
    
        $this->slotType = $slotType;
        $this->slots = $slots;
    
        $this->inventory = $inventory;

        $this->notes = $notes;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.character');
    }
}
