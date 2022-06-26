import { Component, OnInit } from '@angular/core';
import { MaratalStatus, Model } from '../shared/models/model';
import FamilyTree from "@balkangraph/familytree.js";
import { gurramFamily } from '../shared/models/gurramFamily';
import { ramakrishnaFamily } from '../shared/models/ramakrishnaFamily';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: Model = {
    ids: ['id1', 'id2'],
    members: [
      {
      id: 0,
      firstName: 'Sai',
      lastName: 'Gurram',
      education: 'Masters in Mechanical Engineering from Hochschule Kaiserslautern, Germany',
      occupation: 'Sofware Engineer at Datev eG, Germany',
      address: {
        street: 'VogelwoogStrasee 32',
        city: 'Kaiserslautern',
        pinCode: 67659,
        country: 'Germany'
      },
      spouse: '',
      maratalStatus: MaratalStatus.MARRIED,
    }
  ]
  }

  constructor() { }

  ngOnInit(): void {
    const gurramTree = document.getElementById('gurram-tree');
    const ramakrishnaTree = document.getElementById('ramakrishna-tree');
            if (gurramTree) {
                var family = new FamilyTree(gurramTree, {
                  enableSearch: false,
                  mouseScrool: FamilyTree.none,
                  siblingSeparation: 300,
                  minPartnerSeparation: 200,
                  template: 'john',
                    nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                    },
                });

                 family.load(gurramFamily);
            }
            if (ramakrishnaTree) {
              var family = new FamilyTree(ramakrishnaTree, {
                enableSearch: false,
                mouseScrool: FamilyTree.none,
                siblingSeparation: 300,
                minPartnerSeparation: 200,
                template: 'john',
                  nodeBinding: {
                  field_0: "name",
                  field_1: "title",
                  img_0: "img"
                  },
              });

               family.load(ramakrishnaFamily);
          }
  }

}
