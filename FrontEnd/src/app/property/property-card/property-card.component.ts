import { Component } from "@angular/core";

@Component({
        selector: 'app-property-card',
        templateUrl:'property-card.component.html',
        styleUrls: ['property-card.component.css']
    }
)

export class PropertyCardcomponent
{
    Property : any = {
        "Id":1,
        "Type": "House",
        "Price": 20000,
        "Name": "Housing Birla"
    }
}
