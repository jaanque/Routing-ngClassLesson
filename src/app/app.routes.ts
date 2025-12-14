import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtistsComponent } from './artists/artists.component';
import { PaintsComponent } from './paints/paints.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    {
        path: 'gallery',
        component: GalleryComponent,
        children: [
            { path: 'artists', component: ArtistsComponent },
            { path: 'paints', component: PaintsComponent }
        ]
    }
];
