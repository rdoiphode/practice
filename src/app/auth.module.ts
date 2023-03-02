import { CommonModule } from "@angular/common";
import { FormsModule, NgModel } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";


@NgModel({

    imports:[
        CommonModule,
        FormsModule,
        RouterModule forchild([{Path: '', component: AppComponent}])],
    declarations: [AppComponent],
    exports:[AppComponent]
})

export class AuthModule{
    
}

function forchild(arg0: { Path: string; component: typeof AppComponent; }[]) {
    throw new Error("Function not implemented.");
}
