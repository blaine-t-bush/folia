<div class="character-container">
    <div class="character">
        <div class="character-name handwritten">
            {{ $name }}
        </div>
        
        <div class="character-name-form typed">
            NAME
        </div>

        <div class="character-summary handwritten">
            Level {{ $level }} {{ $characterClass }} {{ $vocation }}
        </div>

        <div class="character-summary-form typed">
            LEVEL / CLASS / VOCATION
        </div>

        <div class="character-vitals">
            <div class="character-vitals-label label-1 typed">HP</div>
            <div class="character-vitals-label label-2 typed">AV</div>
            <div class="character-vitals-label label-3 typed">ST</div>
            <div class="character-vitals-label label-4 typed">AC</div>
            <div class="character-vitals-label label-5 typed">MV</div>
            <div class="character-vitals-value value-1 handwritten">{{ $hitPoints }}</div>
            <div class="character-vitals-value value-2 handwritten">{{ $attackValue }}</div>
            <div class="character-vitals-value value-3 handwritten">{{ $savingThrow }}</div>
            <div class="character-vitals-value value-4 handwritten">{{ $armorClass }}</div>
            <div class="character-vitals-value value-5 handwritten">{{ $movement }}</div>
        </div>

        <div class="character-attributes">
            <div class="character-attributes-label label-1 typed">STR</div>
            <div class="character-attributes-label label-2 typed">DEX</div>
            <div class="character-attributes-label label-3 typed">CON</div>
            <div class="character-attributes-label label-4 typed">INT</div>
            <div class="character-attributes-label label-5 typed">WIS</div>
            <div class="character-attributes-label label-6 typed">CHA</div>
            <div class="character-attributes-value value-1 handwritten">{{ $strengthScore }}</div>
            <div class="character-attributes-value value-2 handwritten">{{ $dexterityScore }}</div>
            <div class="character-attributes-value value-3 handwritten">{{ $constitutionScore }}</div>
            <div class="character-attributes-value value-4 handwritten">{{ $intelligenceScore }}</div>
            <div class="character-attributes-value value-5 handwritten">{{ $wisdomScore }}</div>
            <div class="character-attributes-value value-6 handwritten">{{ $charismaScore }}</div>
            <div class="character-attributes-groups groups-1 handwritten"><span>{{ $strengthGroups }}</span></div>
            <div class="character-attributes-groups groups-2 handwritten"><span>{{ $dexterityGroups }}</span></div>
            <div class="character-attributes-groups groups-3 handwritten"><span>{{ $constitutionGroups }}</span></div>
            <div class="character-attributes-groups groups-4 handwritten"><span>{{ $intelligenceGroups }}</span></div>
            <div class="character-attributes-groups groups-5 handwritten"><span>{{ $wisdomGroups }}</span></div>
            <div class="character-attributes-groups groups-6 handwritten"><span>{{ $charismaGroups }}</span></div>
        </div>

        <div class="character-slots">
            <div class="character-slots-header typed">
                CLASS SLOTS <span class="handwritten">- {{ $slotType }}</span>
            </div>
            <ul class="character-slots-list handwritten">
                @foreach ($slots as $slot)
                    <li>{{ $slot }}</li>
                @endforeach
            </ul>
        </div>

        <div class="character-inventory">
            <div class="character-inventory-header typed">
                INVENTORY
            </div>
            <ul class="character-inventory-list handwritten">
                @foreach ($inventory as $item)
                    <li>{{ $item }}</li>
                @endforeach
            </ul>
        </div>

        <div class="character-inventory">
            <div class="character-inventory-header typed">
                NOTES
            </div>
            <ul class="character-inventory-list handwritten">
                @foreach ($notes as $note)
                    <li>{{ $note }}</li>
                @endforeach
            </ul>
        </div>
    </div>
</div>