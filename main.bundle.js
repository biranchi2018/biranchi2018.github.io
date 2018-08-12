webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div> -->\n\n\n\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var navbar_module_1 = __webpack_require__("./src/app/shared/navbar/navbar.module.ts");
var footer_module_1 = __webpack_require__("./src/app/shared/footer/footer.module.ts");
var sidebar_module_1 = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
var lbd_module_1 = __webpack_require__("./src/app/lbd/lbd.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("./src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("./src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("./src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("./src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("./src/app/notifications/notifications.component.ts");
var upgrade_component_1 = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var skill_component_1 = __webpack_require__("./src/app/skill/skill.component.ts");
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
var safe_pipe_1 = __webpack_require__("./src/app/pipes/safe-pipe.ts");
var http_2 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var bool_to_yes_no_pipe_1 = __webpack_require__("./src/app/pipes/bool-to-yes-no/bool-to-yes-no.pipe.ts");
var abstract_camera_service_1 = __webpack_require__("./src/app/services/abstract-camera.service.ts");
var desktop_camera_service_1 = __webpack_require__("./src/app/services/desktop-camera.service.ts");
var face_recognition_service_1 = __webpack_require__("./src/app/services/face-recognition.service.ts");
var mobile_camera_service_1 = __webpack_require__("./src/app/services/mobile-camera.service.ts");
var platform_information_provider_1 = __webpack_require__("./src/app/services/platform-information.provider.ts");
var companies_component_1 = __webpack_require__("./src/app/companies/companies.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            user_component_1.UserComponent,
            tables_component_1.TablesComponent,
            typography_component_1.TypographyComponent,
            icons_component_1.IconsComponent,
            maps_component_1.MapsComponent,
            notifications_component_1.NotificationsComponent,
            upgrade_component_1.UpgradeComponent,
            skill_component_1.SkillComponent,
            safe_pipe_1.SafePipe,
            bool_to_yes_no_pipe_1.BoolToYesNoPipe,
            companies_component_1.CompaniesComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            navbar_module_1.NavbarModule,
            footer_module_1.FooterModule,
            sidebar_module_1.SidebarModule,
            router_1.RouterModule,
            app_routing_1.AppRoutingModule,
            lbd_module_1.LbdModule,
            http_2.HttpClientModule
        ],
        providers: [
            desktop_camera_service_1.DesktopCameraService,
            mobile_camera_service_1.MobileCameraService,
            face_recognition_service_1.FaceRecognitionService,
            platform_information_provider_1.PlatformInformationProvider,
            data_service_1.DataService,
            safe_pipe_1.SafePipe,
            {
                provide: abstract_camera_service_1.AbstractCameraService,
                useFactory: abstract_camera_service_1.cameraFactory,
                deps: [platform_information_provider_1.PlatformInformationProvider]
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("./src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("./src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("./src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("./src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("./src/app/notifications/notifications.component.ts");
var upgrade_component_1 = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
var routes = [
    { path: 'profile', component: home_component_1.HomeComponent },
    // { path: 'user', component: UserComponent },
    // { path: 'table',          component: TablesComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'mobile_apps', component: tables_component_1.TablesComponent },
    { path: 'electronics', component: notifications_component_1.NotificationsComponent },
    { path: 'machine_learning', component: typography_component_1.TypographyComponent },
    { path: 'certifications', component: user_component_1.UserComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    // { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
    { path: '**', redirectTo: '/profile', pathMatch: 'full' }
    // { path: '**', redirectTo: '/dashboard' }
    // {path: '**', redirectTo: '/welcome'}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes, { useHash: true })
            // RouterModule.forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/app.routing.js.map

/***/ }),

/***/ "./src/app/companies/companies.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline_chart_Div\" #timeline_chart_Div style=\"width:450px; height:430px !important\" (window:resize)=\"onResize($event)\">\n</div>"

/***/ }),

/***/ "./src/app/companies/companies.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/companies.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var CompaniesComponent = (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent.prototype.ngAfterViewInit = function () {
        google.charts.load('current', { 'packages': ['timeline'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var dataTable = new google.visualization.DataTable();
            dataTable.addColumn({ type: 'string', id: 'Term' });
            dataTable.addColumn({ type: 'string', id: 'Name' });
            dataTable.addColumn({ type: 'date', id: 'Start' });
            dataTable.addColumn({ type: 'date', id: 'End' });
            dataTable.addRows([
                ['1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
                ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ['3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
            ]);
            var options = {
                timeline: { showRowLabels: false }
            };
            var chart = new google.visualization.Timeline(document.getElementById('timeline_chart_Div'));
            // var chart = new google.visualization.PieChart(this.piechartDiv.naviteElement);
            chart.draw(dataTable, options);
        } // End of function
    };
    CompaniesComponent.prototype.onResize = function (event) {
        console.log("Timeline Resize : " + event.target.innerWidth);
    };
    return CompaniesComponent;
}());
__decorate([
    core_1.ViewChild('timeline_chart_Div'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], CompaniesComponent.prototype, "timeline_chart_Div", void 0);
CompaniesComponent = __decorate([
    core_1.Component({
        selector: 'app-companies',
        template: __webpack_require__("./src/app/companies/companies.component.html"),
        styles: [__webpack_require__("./src/app/companies/companies.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CompaniesComponent);
exports.CompaniesComponent = CompaniesComponent;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/companies.component.js.map

/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var DataService = (function () {
    function DataService() {
        this.messageSource = new BehaviorSubject_1.BehaviorSubject("");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        // console.log("Change Message is called....");
        this.messageSource.next(message);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/data.service.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".image_links {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <!-- <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" /> -->\n                        <img src=\"assets/img/me/biranchi1.png\" alt=\"...\" />\n\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/me/biranchi1.png\" alt=\"...\" />\n\n                                <h4 class=\"title\">Biranchi Nayak\n                                    <br />\n                                </h4>\n\n                            </a>\n                        </div>\n                        <p class=\"description text-center\">Kuala Lumpur, Malaysia\n                            <br />\n                            <small>\n                                <a href=\"mailto:biranchi125@gmail.com\">biranchi125@gmail.com</a>\n                            </small>\n                        </p>\n                        <p class=\"description text-center\">\n                            <br> I am a mobile apps cum full stack developer, electronics hobbyist &amp;\n                            <br> machine learning enthusiast.\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\" style=\"padding-bottom:20px; padding-top:10px\">\n\n                        <!-- <button href=\"#\" class=\"btn btn-simple\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </button>\n                        <button href=\"#\" class=\"btn btn-simple\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </button>\n                        <button href=\"#\" class=\"btn btn-simple\">\n                            <i class=\"fa fa-google-plus-square\"></i>\n                        </button> -->\n\n\n                        <img src=\"assets/img/profile_icons/github.svg\" (click)=\"openLink('github')\" class=\"image_links\">\n                        <img src=\"assets/img/profile_icons/linkedin.svg\" (click)=\"openLink('linkedin')\" class=\"image_links\">\n                        <img src=\"assets/img/profile_icons/skype.svg\" (click)=\"openLink('skype')\" class=\"image_links\">\n                        <img src=\"assets/img/profile_icons/whatsapp.svg\" (click)=\"openLink('whatsapp')\" class=\"image_links\">\n\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n\n                <app-skill></app-skill>\n\n                <!-- <lbd-chart [title]=\"'Skillset'\" [subtitle]=\"'Technical Skills'\" [chartClass]=\"'ct-perfect-fourth'\" [chartType]=\"emailChartType\"\n                    [chartData]=\"emailChartData\" [legendItems]=\"emailChartLegendItems\" [withHr]=\"true\" [footerIconClass]=\"'fa fa-clock-o'\"\n                    [footerText]=\"'Last update: July 2018'\">\n                </lbd-chart> -->\n\n\n            </div>\n            <div class=\"col-md-4\">\n                <iframe allow=\"microphone;\" style=\"border:1px solid lightgray\" width=\"100%\" height=\"500px\" src=\"https://console.dialogflow.com/api-client/demo/embedded/1731069b-64bb-41bd-becc-7390dda8d04b\">\n                </iframe>\n            </div>\n            <!-- <div class=\"col-md-8\">\n                <lbd-chart [title]=\"'Users Behavior'\" [subtitle]=\"'24 Hours performance'\" [chartType]=\"hoursChartType\" [chartData]=\"hoursChartData\"\n                    [chartOptions]=\"hoursChartOptions\" [chartResponsive]=\"hoursChartResponsive\" [legendItems]=\"hoursChartLegendItems\"\n                    [withHr]=\"true\" [footerIconClass]=\"'fa fa-history'\" [footerText]=\"'Updated 3 minutes ago'\">\n                </lbd-chart>\n            </div> -->\n\n        </div>\n\n\n\n        <div class=\"row\">\n\n            <div class=\"col-md-6\">\n\n                <!-- <app-companies></app-companies> -->\n\n                <!-- <lbd-chart [title]=\"'2014 Sales'\" [subtitle]=\"'All products including Taxes'\" [chartType]=\"activityChartType\" [chartData]=\"activityChartData\"\n                    [chartOptions]=\"activityChartOptions\" [chartResponsive]=\"activityChartResponsive\" [legendItems]=\"activityChartLegendItems\"\n                    [withHr]=\"true\" [footerIconClass]=\"'fa fa-check'\" [footerText]=\"'Data information certified'\">\n                </lbd-chart> -->\n\n                <div class=\"card\">\n\n                    <div class=\"header\">\n                        <h4 class=\"title\">Mobile Apps</h4>\n                        <!-- <p class=\"category\">Backend development</p> -->\n                    </div>\n\n                    <div class=\"content\">\n\n                        <div class=\"list-group\">\n                            <a *ngFor=\"let item of mobileApps_arr\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">\n                                        <b>{{item.title}}</b>\n                                    </h5>\n                                </div>\n                                <p class=\"mb-1\">{{item.desc}}</p>\n                            </a>\n\n                            <!-- <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">List group item heading</h5>\n                                </div>\n                                <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                            </a>\n                            <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">List group item heading</h5>\n                                </div>\n                                <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                            </a> -->\n\n                        </div>\n\n\n                        <!-- <div class=\"table-full-width\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox1\" type=\"checkbox\">\n                                                <label for=\"checkbox1\">\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox2\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox2\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox3\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox3\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                            rain swept through metro Detroit\n                                        </td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox4\" type=\"checkbox\">\n                                                <label for=\"checkbox4\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox5\" type=\"checkbox\">\n                                                <label for=\"checkbox5\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Read \"Following makes Medium better\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox6\" type=\"checkbox\">\n                                                <label for=\"checkbox6\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Unfollow 5 enemies from twitter</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"footer\">\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div> -->\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n\n            <div class=\"col-md-6\">\n\n                <div class=\"card\">\n\n                    <div class=\"header\">\n                        <h4 class=\"title\">Machine Learning Projects</h4>\n                        <!-- <p class=\"category\">Backend development</p> -->\n                    </div>\n\n                    <div class=\"content\">\n\n                        <div class=\"list-group\">\n\n                            <a *ngFor=\"let item of machine_learning_projects_arr\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">\n                                        <b>{{item.title}}</b>\n                                    </h5>\n                                </div>\n                                <p class=\"mb-1\">{{item.desc}}</p>\n                            </a>\n\n\n\n                            <!-- <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">List group item heading</h5>\n                                </div>\n                                <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                            </a>\n                            <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1\">List group item heading</h5>\n                                </div>\n                                <p class=\"mb-1\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                            </a> -->\n\n                        </div>\n\n                        <!-- <div class=\"table-full-width\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox1\" type=\"checkbox\">\n                                                <label for=\"checkbox1\">\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox2\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox2\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox3\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox3\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                            rain swept through metro Detroit\n                                        </td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox4\" type=\"checkbox\">\n                                                <label for=\"checkbox4\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox5\" type=\"checkbox\">\n                                                <label for=\"checkbox5\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Read \"Following makes Medium better\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox6\" type=\"checkbox\">\n                                                <label for=\"checkbox6\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Unfollow 5 enemies from twitter</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"footer\">\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div> -->\n\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
        // public emailChartType: ChartType;
        // public emailChartData: any;
        // public emailChartLegendItems: LegendItem[];
        // public hoursChartType: ChartType;
        // public hoursChartData: any;
        // public hoursChartOptions: any;
        // public hoursChartResponsive: any[];
        // public hoursChartLegendItems: LegendItem[];
        // public activityChartType: ChartType;
        // public activityChartData: any;
        // public activityChartOptions: any;
        // public activityChartResponsive: any[];
        // public activityChartLegendItems: LegendItem[];
        this.mobileApps_arr = [];
        this.machine_learning_projects_arr = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initialiseProjects();
    };
    HomeComponent.prototype.initialiseProjects = function () {
        this.mobileApps_arr = [];
        this.machine_learning_projects_arr = [];
        var obj = null;
        //=================== Mobile Apps =========================
        obj = {};
        obj.title = "KLIA Ekspres Mobile App";
        obj.desc = "The ERL Mobile App is a cross platform mobile app used for booking tickets on KLIA Ekspres and KLIA Transit lines which runs between KL Sentral and KLIA, Malaysia";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "iHajj Guide";
        obj.desc = "The iHajj app is an enterprise app developed for the Muslim pilgrims going for performing Hajj & Umrah.";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "Singapore Airlines";
        obj.desc = "Mobile app for flight checkin, checking flight status and saving boarding passes on the device.";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "Flight Status for AirAsia";
        obj.desc = "Mobile app for getting the Flight schedule and Flight Status of AirAsia flights.";
        this.mobileApps_arr.push(obj);
        // ================ Machine Learning Apps ========================
        obj = {};
        obj.title = "Object Detection using Tensorflow";
        obj.desc = "Custom object Detection using Tensorflow, OpenCV on MacOS and iOS mobile device.";
        this.machine_learning_projects_arr.push(obj);
        obj = {};
        obj.title = "Intrusion detection on Raspberry Pi";
        obj.desc = "Automated sms's with link to person's pic are sent to a pre-configured mobile number on detecting persons in unauthorized areas.";
        this.machine_learning_projects_arr.push(obj);
        obj = {};
        obj.title = "Face and Emotion detection";
        obj.desc = "Face detection and Emotion detection using Python, OpenCV";
        this.machine_learning_projects_arr.push(obj);
        obj = {};
        obj.title = "Person detection using Drone";
        obj.desc = "Person detection using Syma X5HW drone";
        this.machine_learning_projects_arr.push(obj);
    };
    // createCharts() {
    //   this.emailChartType = ChartType.Pie;
    //   this.emailChartData = {
    //     labels: ['62%', '32%', '6%'],
    //     series: [62, 32, 6]
    //   };
    //   this.emailChartLegendItems = [
    //     { title: 'Open', imageClass: 'fa fa-circle text-info' },
    //     { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
    //     { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
    //   ];
    //   this.hoursChartType = ChartType.Line;
    //   this.hoursChartData = {
    //     labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
    //     series: [
    //       [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
    //       [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
    //       [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
    //     ]
    //   };
    //   this.hoursChartOptions = {
    //     low: 0,
    //     high: 800,
    //     showArea: true,
    //     height: '245px',
    //     axisX: {
    //       showGrid: false,
    //     },
    //     lineSmooth: Chartist.Interpolation.simple({
    //       divisor: 3
    //     }),
    //     showLine: false,
    //     showPoint: false,
    //   };
    //   this.hoursChartResponsive = [
    //     ['screen and (max-width: 640px)', {
    //       axisX: {
    //         labelInterpolationFnc: function (value) {
    //           return value[0];
    //         }
    //       }
    //     }]
    //   ];
    //   this.hoursChartLegendItems = [
    //     { title: 'Open', imageClass: 'fa fa-circle text-info' },
    //     { title: 'Click', imageClass: 'fa fa-circle text-danger' },
    //     { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
    //   ];
    //   this.activityChartType = ChartType.Bar;
    //   this.activityChartData = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     series: [
    //       [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    //       [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
    //     ]
    //   };
    //   this.activityChartOptions = {
    //     seriesBarDistance: 10,
    //     axisX: {
    //       showGrid: false
    //     },
    //     height: '245px'
    //   };
    //   this.activityChartResponsive = [
    //     ['screen and (max-width: 640px)', {
    //       seriesBarDistance: 5,
    //       axisX: {
    //         labelInterpolationFnc: function (value) {
    //           return value[0];
    //         }
    //       }
    //     }]
    //   ];
    //   this.activityChartLegendItems = [
    //     { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
    //     { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
    //   ];
    // }
    HomeComponent.prototype.openLink = function (link) {
        var url = "";
        if (link == 'github') {
            url = "https://www.github.com/biranchi2018/";
        }
        else if (link == 'linkedin') {
            url = "https://www.linkedin.com/in/biranchi";
        }
        else if (link == 'skype') {
            url = "skype:xchanging.biranchi?call";
        }
        else if (link == 'whatsapp') {
            url = "https://api.whatsapp.com/send?phone=+60169695224";
        }
        window.open(url, "_blank");
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/home.component.js.map

/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">202 Awesome Stroke Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"http://themes-pixeden.com/font-demos/7-stroke/index.html\">Pixeden</a></p>\n                    </div>\n                    <div class=\"content all-icons\">\n                        <div class=\"row\">\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-album\"></i>\n                                    <input type=\"text\" value=\"pe-7s-album\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-arc\"></i>\n                                    <input type=\"text\" value=\"pe-7s-arc\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bandaid\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bandaid\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-car\"></i>\n                                    <input type=\"text\" value=\"pe-7s-car\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diamond\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diamond\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-door-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-door-lock\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-eyedropper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-eyedropper\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-female\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gym\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gym\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hammer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hammer\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-headphones\"></i>\n                                    <input type=\"text\" value=\"pe-7s-headphones\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-helm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-helm\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hourglass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hourglass\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-leaf\"></i>\n                                    <input type=\"text\" value=\"pe-7s-leaf\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magic-wand\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magic-wand\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-male\"></i>\n                                    <input type=\"text\" value=\"pe-7s-male\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint-bucket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint-bucket\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pendrive\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pendrive\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-piggy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-piggy\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plugin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plugin\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-rocket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-rocket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-settings\"></i>\n                                    <input type=\"text\" value=\"pe-7s-settings\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shield\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shield\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-smile\"></i>\n                                    <input type=\"text\" value=\"pe-7s-smile\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-usb\"></i>\n                                    <input type=\"text\" value=\"pe-7s-usb\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-vector\"></i>\n                                    <input type=\"text\" value=\"pe-7s-vector\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wine\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wine\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bluetooth\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bluetooth\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-way\"></i>\n                                    <input type=\"text\" value=\"pe-7s-way\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-id\"></i>\n                                    <input type=\"text\" value=\"pe-7s-id\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wristwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wristwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-world\"></i>\n                                    <input type=\"text\" value=\"pe-7s-world\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-users\"></i>\n                                    <input type=\"text\" value=\"pe-7s-users\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user-female\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-up-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-up-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-switch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-switch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-scissors\"></i>\n                                    <input type=\"text\" value=\"pe-7s-scissors\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wallet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wallet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-safe\"></i>\n                                    <input type=\"text\" value=\"pe-7s-safe\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-voicemail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-voicemail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-video\"></i>\n                                    <input type=\"text\" value=\"pe-7s-video\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-unlock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-unlock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-umbrella\"></i>\n                                    <input type=\"text\" value=\"pe-7s-umbrella\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-trash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-trash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-tools\"></i>\n                                    <input type=\"text\" value=\"pe-7s-tools\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-timer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-timer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ticket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ticket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-target\"></i>\n                                    <input type=\"text\" value=\"pe-7s-target\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-sun\"></i>\n                                    <input type=\"text\" value=\"pe-7s-sun\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-study\"></i>\n                                    <input type=\"text\" value=\"pe-7s-study\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-stopwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-stopwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-star\"></i>\n                                    <input type=\"text\" value=\"pe-7s-star\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-speaker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-speaker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-signal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-signal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shuffle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shuffle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shopbag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shopbag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-share\"></i>\n                                    <input type=\"text\" value=\"pe-7s-share\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-server\"></i>\n                                    <input type=\"text\" value=\"pe-7s-server\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-search\"></i>\n                                    <input type=\"text\" value=\"pe-7s-search\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-film\"></i>\n                                    <input type=\"text\" value=\"pe-7s-film\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-science\"></i>\n                                    <input type=\"text\" value=\"pe-7s-science\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-disk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-disk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ribbon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ribbon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-repeat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-repeat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-add-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-add-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paperclip\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paperclip\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-radio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-radio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-print\"></i>\n                                    <input type=\"text\" value=\"pe-7s-print\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-network\"></i>\n                                    <input type=\"text\" value=\"pe-7s-network\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-prev\"></i>\n                                    <input type=\"text\" value=\"pe-7s-prev\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mute\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mute\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-power\"></i>\n                                    <input type=\"text\" value=\"pe-7s-power\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-medal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-medal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-portfolio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-portfolio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plus\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plus\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-left-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-left-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-play\"></i>\n                                    <input type=\"text\" value=\"pe-7s-play\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-key\"></i>\n                                    <input type=\"text\" value=\"pe-7s-key\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-joy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-joy\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo-gallery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo-gallery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pin\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-phone\"></i>\n                                    <input type=\"text\" value=\"pe-7s-phone\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plug\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plug\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pen\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pen\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-right-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-right-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paper-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paper-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-delete-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-delete-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bottom-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bottom-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-notebook\"></i>\n                                    <input type=\"text\" value=\"pe-7s-notebook\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-news-paper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-news-paper\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-musiclist\"></i>\n                                    <input type=\"text\" value=\"pe-7s-musiclist\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-music\"></i>\n                                    <input type=\"text\" value=\"pe-7s-music\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mouse\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mouse\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-more\"></i>\n                                    <input type=\"text\" value=\"pe-7s-more\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-moon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-moon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-monitor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-monitor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-micro\"></i>\n                                    <input type=\"text\" value=\"pe-7s-micro\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-menu\"></i>\n                                    <input type=\"text\" value=\"pe-7s-menu\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-marker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-marker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magnet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magnet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-loop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-loop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-look\"></i>\n                                    <input type=\"text\" value=\"pe-7s-look\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lintern\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lintern\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-link\"></i>\n                                    <input type=\"text\" value=\"pe-7s-link\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-light\"></i>\n                                    <input type=\"text\" value=\"pe-7s-light\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-less\"></i>\n                                    <input type=\"text\" value=\"pe-7s-less\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-keypad\"></i>\n                                    <input type=\"text\" value=\"pe-7s-keypad\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-junk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-junk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-info\"></i>\n                                    <input type=\"text\" value=\"pe-7s-info\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-home\"></i>\n                                    <input type=\"text\" value=\"pe-7s-home\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph3\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph3\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-global\"></i>\n                                    <input type=\"text\" value=\"pe-7s-global\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gleam\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gleam\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-glasses\"></i>\n                                    <input type=\"text\" value=\"pe-7s-glasses\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gift\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gift\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-folder\"></i>\n                                    <input type=\"text\" value=\"pe-7s-folder\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-flag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-flag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-filter\"></i>\n                                    <input type=\"text\" value=\"pe-7s-filter\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-expand1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-expand1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-exapnd2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-exapnd2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-edit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-edit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drawer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drawer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diskette\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diskette\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-date\"></i>\n                                    <input type=\"text\" value=\"pe-7s-date\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cup\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cup\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-culture\"></i>\n                                    <input type=\"text\" value=\"pe-7s-culture\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-crop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-crop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-credit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-credit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-copy-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-copy-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-config\"></i>\n                                    <input type=\"text\" value=\"pe-7s-config\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-compass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-compass\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-comment\"></i>\n                                    <input type=\"text\" value=\"pe-7s-comment\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-coffee\"></i>\n                                    <input type=\"text\" value=\"pe-7s-coffee\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-clock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-clock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-check\"></i>\n                                    <input type=\"text\" value=\"pe-7s-check\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-chat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-chat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cart\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cart\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-camera\"></i>\n                                    <input type=\"text\" value=\"pe-7s-camera\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-call\"></i>\n                                    <input type=\"text\" value=\"pe-7s-call\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-calculator\"></i>\n                                    <input type=\"text\" value=\"pe-7s-calculator\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-browser\"></i>\n                                    <input type=\"text\" value=\"pe-7s-browser\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bookmarks\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bookmarks\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bicycle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bicycle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bell\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bell\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-battery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-battery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ball\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ball\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-attention\"></i>\n                                    <input type=\"text\" value=\"pe-7s-attention\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-anchor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-anchor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-albums\"></i>\n                                    <input type=\"text\" value=\"pe-7s-albums\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-alarm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-alarm\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-airplay\"></i>\n                                    <input type=\"text\" value=\"pe-7s-airplay\">\n                                </div>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    core_1.Component({
        selector: 'app-icons',
        template: __webpack_require__("./src/app/icons/icons.component.html"),
        styles: [__webpack_require__("./src/app/icons/icons.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/icons.component.js.map

/***/ }),

/***/ "./src/app/lbd/lbd-chart/lbd-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lbd/lbd-chart/lbd-chart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Chartist = __webpack_require__("./node_modules/chartist/dist/chartist.js");
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var LbdChartComponent = LbdChartComponent_1 = (function () {
    function LbdChartComponent() {
    }
    LbdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + LbdChartComponent_1.currentId++;
    };
    LbdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new Chartist.Pie("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new Chartist.Line("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new Chartist.Bar("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    return LbdChartComponent;
}());
LbdChartComponent.currentId = 1;
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "subtitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "chartClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LbdChartComponent.prototype, "chartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LbdChartComponent.prototype, "chartData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LbdChartComponent.prototype, "chartOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LbdChartComponent.prototype, "chartResponsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "footerIconClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LbdChartComponent.prototype, "footerText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LbdChartComponent.prototype, "legendItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LbdChartComponent.prototype, "withHr", void 0);
LbdChartComponent = LbdChartComponent_1 = __decorate([
    core_1.Component({
        selector: 'lbd-chart',
        template: __webpack_require__("./src/app/lbd/lbd-chart/lbd-chart.component.html"),
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], LbdChartComponent);
exports.LbdChartComponent = LbdChartComponent;
var LbdChartComponent_1;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/lbd-chart.component.js.map

/***/ }),

/***/ "./src/app/lbd/lbd.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var lbd_chart_component_1 = __webpack_require__("./src/app/lbd/lbd-chart/lbd-chart.component.ts");
var LbdModule = (function () {
    function LbdModule() {
    }
    return LbdModule;
}());
LbdModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule
        ],
        declarations: [
            lbd_chart_component_1.LbdChartComponent
        ],
        exports: [
            lbd_chart_component_1.LbdChartComponent
        ]
    })
], LbdModule);
exports.LbdModule = LbdModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/lbd.module.js.map

/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" #map></div>"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var MapsComponent = (function () {
    function MapsComponent() {
        this.map = null;
        this.myCurrentLocation = null;
        this.biranchi_Lat = 3.1756663000000005;
        this.biranchi_long = 101.6843509;
        this.distanceMsg = "";
        this.biranchi_dest_marker = null;
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        var biranchiLatlng = new google.maps.LatLng(this.biranchi_Lat, this.biranchi_long);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Current Lat :" + position.coords.latitude);
                console.log("Current Lng :" + position.coords.longitude);
                // Testing
                // self.myCurrentLocation = new google.maps.LatLng(3.187986, 101.689773);
                self.myCurrentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var destinationLatLng = new google.maps.LatLng(self.biranchi_Lat, self.biranchi_long);
                //self.showCurrLocationOnMap();
                self.getDistanceBetweenPoints(self.myCurrentLocation, destinationLatLng, 'km', function (result) {
                    self.distanceMsg = "Approx. <b>" + result + " km</b> away";
                    console.log("distanceMsg : " + self.distanceMsg);
                });
                self.drawRouteMap();
            });
        }
        else {
            self.addMarker("Biranchi's Location", biranchiLatlng);
            console.log("Adding marker to Biranchi's location : " + biranchiLatlng.lat() + ',' + biranchiLatlng.lng());
        }
        var mapOptions = {
            zoom: 13,
            center: biranchiLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                {
                    'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }]
                },
                {
                    'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }]
                },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                {
                    'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }]
                },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        // this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //----------------- Destination Marker Start ------------------------
        self.biranchi_dest_marker = new google.maps.Marker({
            position: biranchiLatlng,
            icon: {
                url: 'assets/img/svg_PinRed.svg'
            },
            title: 'Biranchi\'s Location'
        });
        self.biranchi_dest_marker.setMap(self.map);
        var dest_infowindow = new google.maps.InfoWindow({
            content: 'Biranchi\'s Location' + self.distanceMsg
        });
        self.biranchi_dest_marker.addListener('click', function () {
            if (self.distanceMsg && self.distanceMsg.length) {
                dest_infowindow.setContent('Biranchi\'s Location <br>' + self.distanceMsg);
            }
            dest_infowindow.open(self.map, self.biranchi_dest_marker);
        });
        setTimeout(function () {
            google.maps.event.trigger(self.biranchi_dest_marker, 'click');
        }, 2500);
        //----------------- Destination Marker End ------------------------
    };
    MapsComponent.prototype.showCurrLocationOnMap = function () {
        var self = this;
        //----------------- Source Marker Start ------------------------
        if (self.myCurrentLocation) {
            var source_marker = new google.maps.Marker({
                position: self.myCurrentLocation,
                icon: {
                    url: 'assets/img/svg_PinBlue.svg'
                },
                title: 'My Location',
            });
            source_marker.setMap(this.map);
        }
        //----------------- Source Marker Start ------------------------
    };
    //=================== Distance Calculation Start ================
    MapsComponent.prototype.getDistanceBetweenPoints = function (start, end, units, callback) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        // console.log("start : ", start.toString(), ", type: ", typeof (start));
        // console.log("end : ", end.toString(), ", type: ", typeof (end));
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat();
        var lon1 = start.lng();
        var lat2 = end.lat();
        var lon2 = end.lng();
        // console.log("lat1 : ", lat1, ",lon1 : ", lon1);
        // console.log("lat2 : ", lat2, ",lon2 : ", lon2);
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        //return d;
        callback(d.toFixed(2));
    };
    MapsComponent.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    //=================== Distance Calculation  Ends ==================
    //====================== Direction Service Start =================================
    // startDirectionServices(callback) {
    //     this.directionsService = new google.maps.DirectionsService;
    //     this.directionsDisplay = new google.maps.DirectionsRenderer({
    //         map: this.map
    //     });
    //     callback("success");
    // }
    //====================== Direction Service End =================================
    MapsComponent.prototype.drawRouteMap = function () {
        var self = this;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true
        });
        var stepDisplay = new google.maps.InfoWindow;
        var request = {
            origin: { lat: this.myCurrentLocation.lat(), lng: this.myCurrentLocation.lng() },
            destination: { lat: this.biranchi_Lat, lng: this.biranchi_long },
            waypoints: [],
            optimizeWaypoints: false,
            travelMode: 'DRIVING'
        };
        //console.log("drawRouteMap request : " + JSON.stringify(request));
        this.directionsService.route(request, function (response, status) {
            //console.log("directionsService response : ", JSON.stringify(response));
            console.log("directionsService status : ", status);
            if (status === 'OK') {
                //--------- Static Maps Start ------------
                var start = self.myCurrentLocation.lat() + ',' + self.myCurrentLocation.lng();
                var end = self.biranchi_Lat + ',' + self.biranchi_long;
                // var path = response.routes[0].overview_polyline;
                // var lmarkers = [];
                // var waypoints_labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
                // var waypoints_label_iter = 0;
                // lmarkers.push("markers=color:green|label:" + waypoints_labels[waypoints_label_iter] + '|' + start);
                // for (var i = 0; i < request.waypoints.length; i++) {
                //     //I have waypoints that are not stopovers I dont want to display them
                //     //if (request.waypoints[i].stopover == true) {
                //     lmarkers.push("markers=color:blue|label:" + waypoints_labels[++waypoints_label_iter] + '|' + request.waypoints[i].location.lat() + "," + request.waypoints[i].location.lng());
                //     //}
                // }
                // lmarkers.push("markers=color:red|label:" + waypoints_labels[++waypoints_label_iter] + '|' + end);
                //var finalMarkers = lmarkers.join('&');
                //self.googleStaticMapsURL = "https://maps.googleapis.com/maps/api/staticmap?size=640x640&scale=2&maptype=roadmap&path=enc:" + path + "&" + finalMarkers + "&key=" + self.googleAPIKey;
                //console.log("static Maps url : ", self.googleStaticMapsURL);
                //--------- Static Maps End --------------
                self.directionsDisplay.setDirections(response);
                //self.showSteps(response, [], stepDisplay, self.map);
                //Remove the old destination marker
                self.biranchi_dest_marker.setMap(null);
                //Add new Source and Destination markers
                var leg = response.routes[0].legs[0];
                self.addMarker("My Location", leg.start_location);
                self.addMarker("Biranchi's Location", leg.end_location);
            }
            else {
                console.log('Directions request failed due to ', status);
            }
        });
    };
    //============== Show Steps Start ===================
    // showSteps(directionResult, markerArray, stepDisplay, map) {
    //     // For each step, place a marker, and add the text to the marker's infowindow.
    //     // Also attach the marker to an array so we can keep track of it and remove it
    //     // when calculating new routes.
    //     var self = this;
    //     var myRoute = directionResult.routes[0].legs[0];
    //     for (var i = 0; i < myRoute.steps.length; i++) {
    //         var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
    //         if (i == 0) {
    //             console.log("First Marker : " + JSON.stringify(marker));
    //         }
    //         if (i == myRoute.steps.length - 1) {
    //             console.log("Last Marker : " + marker);
    //         }
    //         marker.setMap(map);
    //         marker.setPosition(myRoute.steps[i].start_location);
    //         self.attachInstructionText(stepDisplay, marker, myRoute.steps[i].instructions, map);
    //     }
    // }
    // attachInstructionText(stepDisplay, marker, text, map) {
    //     google.maps.event.addListener(marker, 'click', function () {
    //         // Open an info window when the marker is clicked on, containing the text
    //         // of the step.
    //         stepDisplay.setContent(text);
    //         stepDisplay.open(map, marker);
    //     });
    // }
    //============== Show Steps End =======================
    //====================== Load Map Start =================================
    // loadMap(callback) {
    //     let mapOptions = {
    //         center: this.myCurrentLocation,
    //         zoom: 18,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //     this.directionsService = new google.maps.DirectionsService;
    //     this.directionsDisplay = new google.maps.DirectionsRenderer({
    //         map: this.map
    //     });
    //     //============ Add Marker =========
    //     this.addMarker("My Location", this.myCurrentLocation);
    //     callback("success");
    // }
    //====================== Load Map End =================================
    //==================== Add Marker Start =======================
    MapsComponent.prototype.addMarker = function (placeName, latLng) {
        var _this = this;
        var self = this;
        //============== Marker Start =================
        var marker = "";
        if (placeName == "My Location") {
            marker = new google.maps.Marker({
                map: self.map,
                title: self.capitalizeString(placeName),
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'assets/img/svg_PinBlue.svg'
                },
                position: latLng //this.map.getCenter()
            });
        }
        else {
            marker = new google.maps.Marker({
                map: self.map,
                title: self.capitalizeString(placeName) + "<br>" + self.distanceMsg,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'assets/img/svg_PinRed.svg'
                },
                position: latLng //this.map.getCenter()
            });
        }
        marker.setVisible(true);
        //============== Marker End =================
        //============== Add Info Window Start =================
        var infoWindow = new google.maps.InfoWindow({
            content: marker.title
        });
        //infoWindow.open(this.map, marker);
        // marker.addListener('click', function () {
        //   infowindow.open(this.map, marker);
        // });
        google.maps.event.addListener(marker, 'click', function () {
            //this.ngZone.run(() => {
            infoWindow.open(_this.map, marker);
            //});
        });
        //--------------- Add to markers array Start ----------------
        //this.markersArr.push({ "placeName": placeName, "marker": marker });
        // console.log("Markers array : ", this.markersArr);
        //--------------- Add to markers array End ----------------
        //============== Add Info Window End =================
    };
    //==================== Add Marker End =======================
    //====================== Helper Function =================
    MapsComponent.prototype.capitalizeString = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return MapsComponent;
}());
__decorate([
    core_1.ViewChild('map'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], MapsComponent.prototype, "mapElement", void 0);
MapsComponent = __decorate([
    core_1.Component({
        selector: 'app-maps',
        template: __webpack_require__("./src/app/maps/maps.component.html"),
        styles: [__webpack_require__("./src/app/maps/maps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapsComponent);
exports.MapsComponent = MapsComponent;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/maps.component.js.map

/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n        <!-- Electronics 1 -->\n\n        <div class=\"row\">\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <iframe style=\"border:1px solid lightgray\" width=\"100%\" height=\"500px\" [src]=\"raspberryPiSetupURL | safe\">\n                    </iframe>\n                    <div class=\"content\">\n                        <p class=\"description text-center\">\n                            Raspberry Pi Setup\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <iframe style=\"border:1px solid lightgray\" width=\"100%\" height=\"500px\" [src]=\"objDetectionURL | safe\">\n                    </iframe>\n                    <div class=\"content\">\n                        <p class=\"description text-center\">\n                            Face Detection on Raspberry Pi\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!-- Electronics 1 -->\n\n\n\n        <!-- <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NotificationsComponent = (function () {
    function NotificationsComponent() {
        this.raspberryPiSetupURL = "https://www.youtube.com/embed/wxz1Rw4HR3U";
        this.objDetectionURL = "https://www.youtube.com/embed/56uWlunA4M0";
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        selector: 'app-notifications',
        template: __webpack_require__("./src/app/notifications/notifications.component.html"),
        styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/notifications.component.js.map

/***/ }),

/***/ "./src/app/pipes/bool-to-yes-no/bool-to-yes-no.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var BoolToYesNoPipe = (function () {
    function BoolToYesNoPipe() {
    }
    BoolToYesNoPipe.prototype.transform = function (value, args) {
        if (!!value) {
            return 'Yes';
        }
        return 'No';
    };
    return BoolToYesNoPipe;
}());
BoolToYesNoPipe = __decorate([
    core_1.Pipe({
        name: 'boolToYesNo'
    })
], BoolToYesNoPipe);
exports.BoolToYesNoPipe = BoolToYesNoPipe;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/bool-to-yes-no.pipe.js.map

/***/ }),

/***/ "./src/app/pipes/safe-pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    core_1.Pipe({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], SafePipe);
exports.SafePipe = SafePipe;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/safe-pipe.js.map

/***/ }),

/***/ "./src/app/services/abstract-camera.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var desktop_camera_service_1 = __webpack_require__("./src/app/services/desktop-camera.service.ts");
var mobile_camera_service_1 = __webpack_require__("./src/app/services/mobile-camera.service.ts");
function cameraFactory(platformInformationProvider) {
    if (platformInformationProvider.isMobileDevice) {
        return new mobile_camera_service_1.MobileCameraService();
    }
    return new desktop_camera_service_1.DesktopCameraService();
}
exports.cameraFactory = cameraFactory;
var AbstractCameraService = (function () {
    function AbstractCameraService() {
    }
    return AbstractCameraService;
}());
exports.AbstractCameraService = AbstractCameraService;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/abstract-camera.service.js.map

/***/ }),

/***/ "./src/app/services/desktop-camera.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var DesktopCameraService = (function () {
    function DesktopCameraService() {
    }
    DesktopCameraService.prototype.getMediaDevices = function () {
        var mediaDevices = (window.navigator.mozGetUserMedia || window.navigator.webkitGetUserMedia
            ? {
                getUserMedia: function (options) {
                    return new Promise(function (resolve, reject) {
                        (window.navigator.mozGetUserMedia ||
                            window.navigator.webkitGetUserMedia).call(window.navigator, options, resolve, reject);
                    });
                }
            }
            : null) || window.navigator.mediaDevices;
        return mediaDevices;
    };
    DesktopCameraService.prototype.getPhoto = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.getMediaDevices()
                .getUserMedia({ video: true, audio: false })
                .then(function (stream) {
                var vendorURL = window.URL || window.webkitURL;
                var doc = document;
                var videoElement = doc.createElement('video');
                videoElement.src = vendorURL.createObjectURL(stream);
                videoElement.play();
                var takePhotoInternal = function () {
                    var canvasElement = doc.createElement('canvas');
                    canvasElement.setAttribute('width', videoElement.videoWidth.toString());
                    canvasElement.setAttribute('height', videoElement.videoHeight.toString());
                    setTimeout(function () {
                        var context = canvasElement.getContext('2d');
                        context.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight);
                        var url = canvasElement.toDataURL('image/png');
                        videoElement.pause();
                        if (stream.stop) {
                            stream.stop();
                        }
                        if (stream.getAudioTracks) {
                            stream.getAudioTracks().forEach(function (track) {
                                track.stop();
                            });
                        }
                        if (stream.getVideoTracks) {
                            stream.getVideoTracks().forEach(function (track) {
                                track.stop();
                            });
                        }
                        observer.next(url);
                        observer.complete();
                    }, 500);
                };
                if (videoElement.readyState >= videoElement.HAVE_FUTURE_DATA) {
                    takePhotoInternal();
                }
                else {
                    videoElement.addEventListener('canplay', function () {
                        takePhotoInternal();
                    }, false);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    return DesktopCameraService;
}());
DesktopCameraService = __decorate([
    core_1.Injectable()
], DesktopCameraService);
exports.DesktopCameraService = DesktopCameraService;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/desktop-camera.service.js.map

/***/ }),

/***/ "./src/app/services/face-recognition.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var FaceRecognitionService = (function () {
    function FaceRecognitionService(httpClient) {
        this.httpClient = httpClient;
    }
    FaceRecognitionService.prototype.scanImage = function (subscriptionKey, base64Image) {
        var headers = this.getHeaders(subscriptionKey);
        var params = this.getParams();
        var blob = this.makeblob(base64Image);
        return this.httpClient.post(environment_1.environment.endpoint, blob, {
            params: params,
            headers: headers
        });
        // return this.httpClient.post<FaceRecognitionResponse>(
        //   environment.endpoint,
        //   blob,
        //   {
        //     params,
        //     headers
        //   }
        // ).map(result => <FaceRecognitionResponse>result);
    };
    // scanImage2(subscriptionKey: string, base64Image: string): Observable<FaceRecognitionResponse> {
    //   const headers = this.getHeaders(subscriptionKey);
    //   const params = this.getParams();
    //   const blob = this.makeblob(base64Image);
    //   return this.httpClient.post<FaceRecognitionResponse>(
    //     environment.endpoint,
    //     blob,
    //     {
    //       params,
    //       headers
    //     }
    //   ).pipe();
    // }
    FaceRecognitionService.prototype.makeblob = function (dataURL) {
        var BASE64_MARKER = ';base64,';
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    };
    FaceRecognitionService.prototype.getHeaders = function (subscriptionKey) {
        var headers = new http_1.HttpHeaders();
        headers = headers.set('Content-Type', 'application/octet-stream');
        headers = headers.set('Ocp-Apim-Subscription-Key', subscriptionKey);
        return headers;
    };
    FaceRecognitionService.prototype.getParams = function () {
        var httpParams = new http_1.HttpParams()
            .set('returnFaceId', 'true')
            .set('returnFaceLandmarks', 'false')
            .set('returnFaceAttributes', 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise')
            .set('observe', 'response');
        return httpParams;
    };
    return FaceRecognitionService;
}());
FaceRecognitionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], FaceRecognitionService);
exports.FaceRecognitionService = FaceRecognitionService;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/face-recognition.service.js.map

/***/ }),

/***/ "./src/app/services/mobile-camera.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var MobileCameraService = (function () {
    function MobileCameraService() {
    }
    MobileCameraService.prototype.getPhoto = function () {
        return Observable_1.Observable.create(function (observer) {
            var removeDomListener = function () {
                document.removeEventListener('deviceready', onCordovaDeviceReady);
            };
            var onCordovaDeviceReady = function () {
                var camera = window.navigator.camera;
                var options = {
                    quality: 100,
                    destinationType: camera.DestinationType.DATA_URL,
                    sourceType: camera.PictureSourceType.CAMERA,
                    encodingType: camera.EncodingType.PNG,
                    pictureSourceType: camera.PictureSourceType.CAMERA,
                    saveToPhotoAlbum: false,
                    targetWidth: 640,
                    targetHeight: 640,
                    correctOrientation: true
                };
                camera.getPicture(function (imageData) {
                    observer.next('data:image/png;base64,' + imageData);
                    removeDomListener();
                    observer.complete();
                }, function (error) {
                    observer.error(error);
                    removeDomListener();
                    observer.complete();
                }, options);
            };
            document.addEventListener('deviceready', onCordovaDeviceReady);
        });
    };
    return MobileCameraService;
}());
exports.MobileCameraService = MobileCameraService;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/mobile-camera.service.js.map

/***/ }),

/***/ "./src/app/services/platform-information.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PlatformInformationProvider = (function () {
    function PlatformInformationProvider() {
        this.guessPlatform();
    }
    Object.defineProperty(PlatformInformationProvider.prototype, "isMobileDevice", {
        get: function () {
            return this._iOS || this._isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "isMobileWeb", {
        get: function () {
            return window.innerWidth <= 768;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "isWeb", {
        get: function () {
            return !this.isMobileDevice && !this.isElectron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "isIOS", {
        get: function () {
            return this._iOS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "isAndroid", {
        get: function () {
            return this._isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "isElectron", {
        get: function () {
            return this._isElectron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "userAgent", {
        get: function () {
            return this.getWindow().navigator.userAgent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformInformationProvider.prototype, "platformName", {
        get: function () {
            if (!this.getWindow().device) {
                return '';
            }
            return this.getWindow().device.platform + " " + this.getWindow().device.model;
        },
        enumerable: true,
        configurable: true
    });
    PlatformInformationProvider.prototype.guessPlatform = function () {
        this._iOS =
            this.getWindow().cordova && this.getWindow().cordova.platformId === 'ios';
        this._isAndroid =
            this.getWindow().cordova &&
                this.getWindow().cordova.platformId === 'android';
        this._isElectron =
            this.getWindow().navigator.userAgent.match(/Electron/) !== null;
    };
    PlatformInformationProvider.prototype.getWindow = function () {
        return window;
    };
    return PlatformInformationProvider;
}());
PlatformInformationProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PlatformInformationProvider);
exports.PlatformInformationProvider = PlatformInformationProvider;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/platform-information.provider.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n\n        <p class=\"copyright pull-left\">\n            &copy; {{test | date: 'yyyy'}} &nbsp;\n            <a>Biranchi</a>\n            <!-- <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web -->\n        </p>\n\n        <!-- <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p> -->\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer-cmp',
        template: __webpack_require__("./src/app/shared/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/footer.component.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var footer_component_1 = __webpack_require__("./src/app/shared/footer/footer.component.ts");
var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [footer_component_1.FooterComponent],
        exports: [footer_component_1.FooterComponent]
    })
], FooterModule);
exports.FooterModule = FooterModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/footer.module.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                 <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span> \n            </button> -->\n            <!-- <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a> -->\n\n\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\">\n            <!-- <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-dashboard\"></i>\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-globe\"></i>\n                        <b class=\"caret\"></b>\n                        <span class=\"notification hidden-sm hidden-xs\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            5 Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-search\"></i>\n                        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        <p>Account</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p>\n                            Dropdown\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <p>Log out</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul> -->\n\n            <!-- <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a>\n                        <p>Account</p>\n                    </a>\n                </li>\n            </ul> -->\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
var NavbarComponent = (function () {
    function NavbarComponent(location, element, data) {
        this.element = element;
        this.data = data;
        this.title = "Old title";
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.data.currentMessage.subscribe(function (message) {
            _this.title = message;
            _this.sidebarToggle();
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        console.log("this.sidebarVisible : " + this.sidebarVisible);
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'navbar-cmp',
        template: __webpack_require__("./src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _c || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a, _b, _c;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var navbar_component_1 = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [navbar_component_1.NavbarComponent],
        exports: [navbar_component_1.NavbarComponent]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/navbar.module.js.map

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"#\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"assets/img/me/biranchi1.png\" />\n            </div>\n            Biranchi\n        </a>\n    </div>\n\n\n    <!-- <ul class=\"nav responsive-nav\">\n        <li *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-dashboard\"></i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-globe\"></i>\n                <b class=\"caret hidden-sm hidden-xs\"></b>\n                <span class=\"notification hidden-sm hidden-xs\">5</span>\n                <p class=\"hidden-lg hidden-md\">\n                    5 Notifications\n                    <b class=\"caret\"></b>\n                </p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <a href=\"#\">Notification 1</a>\n                </li>\n                <li>\n                    <a href=\"#\">Notification 2</a>\n                </li>\n                <li>\n                    <a href=\"#\">Notification 3</a>\n                </li>\n                <li>\n                    <a href=\"#\">Notification 4</a>\n                </li>\n                <li>\n                    <a href=\"#\">Another notification</a>\n                </li>\n            </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <i class=\"fa fa-search\"></i>\n                <p class=\"hidden-lg hidden-md\">Search</p>\n            </a>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a href=\"\">\n                <p>Account</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <p>\n                    Dropdown\n                    <b class=\"caret\"></b>\n                </p>\n\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <a href=\"#\">Action</a>\n                </li>\n                <li>\n                    <a href=\"#\">Another action</a>\n                </li>\n                <li>\n                    <a href=\"#\">Something</a>\n                </li>\n                <li>\n                    <a href=\"#\">Another action</a>\n                </li>\n                <li>\n                    <a href=\"#\">Something</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">Separated link</a>\n                </li>\n            </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\" (click)=\"updateTitle(menuItem.title)\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n     -->\n    <ul class=\"nav responsive-nav\">\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\" (click)=\"updateTitle(menuItem.title)\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("./src/app/data.service.ts");
exports.ROUTES = [
    // { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'profile', title: 'My Profile', icon: 'pe-7s-user', class: '' },
    // { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: 'mobile_apps', title: 'Mobile Apps', icon: 'pe-7s-phone', class: '' },
    { path: 'electronics', title: 'Electronics', icon: 'pe-7s-tools', class: '' },
    { path: 'machine_learning', title: 'Machine Learning', icon: 'pe-7s-science', class: '' },
    { path: 'certifications', title: 'Certifications', icon: 'pe-7s-notebook', class: '' },
    // { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    // { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    { path: 'maps', title: 'My Location', icon: 'pe-7s-map-marker', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent(data) {
        this.data = data;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        this.updateTitle(this.menuItems[0].title);
    };
    SidebarComponent.prototype.updateTitle = function (title) {
        // console.log("Title clicked : " + title);
        this.data.changeMessage(title);
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/sidebar.component.js.map

/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, common_1.CommonModule],
        declarations: [sidebar_component_1.SidebarComponent],
        exports: [sidebar_component_1.SidebarComponent]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/sidebar.module.js.map

/***/ }),

/***/ "./src/app/skill/skill.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card1\">\n\n                    <div id=\"piechart\" #piechartDiv style=\"height: 400px !important;\">\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div> -->\n\n\n\n<div id=\"piechart\" #piechartDiv style=\"width:100%; min-height:430px !important\" (window:resize)=\"onResize($event)\">\n</div>"

/***/ }),

/***/ "./src/app/skill/skill.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SkillComponent = (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent.prototype.ngAfterViewInit = function () {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Skills', 'Rating'],
                ['ObjC, Swift', 11],
                ['Ionic 2', 7],
                ['Python', 4],
                ['JavaScript', 4],
                ['PHP, MySQL', 3],
                ['Angular 2', 2],
                ['NodeJS', 2],
                ['Tensorflow', 3],
                ['Keras', 4],
                ['Scikit-Learn', 4],
                ['OpenCV', 4],
                ['Chatbot', 2]
            ]);
            var options = {
                'title': 'Technical Skills',
                is3D: true,
                'chartArea': { 'width': '80%', 'height': '80%' },
                'width': '100%',
                'height': 430
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            // var chart = new google.visualization.PieChart(this.piechartDiv.naviteElement);
            chart.draw(data, options);
        } // End of function
        if (window.addEventListener) {
            window.addEventListener('resize', function () {
                drawChart();
            });
        }
    };
    SkillComponent.prototype.onResize = function (event) {
        console.log("Resize : " + event.target.innerWidth);
    };
    return SkillComponent;
}());
__decorate([
    core_1.ViewChild('piechartDiv'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], SkillComponent.prototype, "piechartDiv", void 0);
SkillComponent = __decorate([
    core_1.Component({
        selector: 'app-skill',
        template: __webpack_require__("./src/app/skill/skill.component.html"),
        styles: [__webpack_require__("./src/app/skill/skill.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SkillComponent);
exports.SkillComponent = SkillComponent;
var _a;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/skill.component.js.map

/***/ }),

/***/ "./src/app/tables/tables.component.css":
/***/ (function(module, exports) {

module.exports = ".image_links {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n}"

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n\n                    <div class=\"list-group\">\n                        <a *ngFor=\"let item of mobileApps_arr\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                <h5 class=\"mb-1\">\n                                    <b>{{item.title}}</b>\n                                </h5>\n                            </div>\n                            <p class=\"mb-1\">{{item.desc}}</p>\n                            <p>\n                                <a class=\"image_links\" (click)=\"openBrowser(item.link)\">{{item.link}}</a>\n                            </p>\n                        </a>\n\n                    </div>\n\n                    <!-- \n                    <div class=\"header\">\n                        <h4 class=\"title\">Striped Table with Hover</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div> -->\n\n\n                </div>\n            </div>\n\n\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\n                                    <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div> -->\n\n\n\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"list-group\">\n                        <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                            <div class=\"d-flex w-100 justify-content-between\">\n                                <h5 class=\"mb-1\">\n                                    <!-- <b>{{item.title}}</b> -->\n                                    <h4 class=\"title\">\n                                        Other Apps\n                                    </h4>\n\n                                </h5>\n                            </div>\n                            <p class=\"mb-1\" style=\"padding-bottom:10px\">\n                                <a class=\"image_links\" (click)=\"openBrowser('https://itunes.apple.com/my/developer/biranchi-n/id879967039');\">https://itunes.apple.com/my/developer/biranchi-n/id879967039</a>\n                            </p>\n                            <p>\n                                <img src=\"assets/img/Personal_iOS_Apps.png\" width=\"100%\" height=\"100%\" alt=\"iOS Apps\" />\n                            </p>\n                        </a>\n\n                    </div>\n\n\n\n                    <!-- <div class=\"header\">\n                        <h4 class=\"title\">iOS Apps</h4>\n                    </div>\n\n                    <div class=\"content table-responsive table-full-width\">\n                        <a class=\"image_links\" (click)=\"openBrowser('https://itunes.apple.com/my/developer/biranchi-n/id879967039');\">https://itunes.apple.com/my/developer/biranchi-n/id879967039</a>\n                    </div>\n\n                    <div class=\"list-group\">\n                        <img src=\"assets/img/Personal_iOS_Apps.png\" width=\"100%\" height=\"100%\" alt=\"iOS Apps\" />\n                    </div> -->\n\n\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var TablesComponent = (function () {
    function TablesComponent() {
        this.mobileApps_arr = [];
    }
    TablesComponent.prototype.ngOnInit = function () {
        // this.tableData1 = {
        //     headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
        //     dataRows: [
        //         ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        //         ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        //         ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        //         ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        //         ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        //         ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        //     ]
        // };
        // this.tableData2 = {
        //     headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
        //     dataRows: [
        //         ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
        //         ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
        //         ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
        //         ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
        //         ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
        //         ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
        //     ]
        // };
        this.initialiseProjects();
    };
    TablesComponent.prototype.initialiseProjects = function () {
        this.mobileApps_arr = [];
        var obj = null;
        //=================== Mobile Apps =========================
        obj = {};
        obj.title = "KLIA Ekspres Mobile App";
        obj.desc = "The ERL Mobile App is a cross platform mobile app used for booking tickets on KLIA Ekspres and KLIA Transit lines which runs between KL Sentral and KLIA, Malaysia";
        obj.link = "https://itunes.apple.com/my/app/klia-ekspres/id618650763?mt=8";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "iHajj Guide";
        obj.desc = "The iHajj app is an enterprise app developed for the Muslim pilgrims going for performing Hajj & Umrah.";
        obj.link = "https://www.csc-crowddynamics.com/";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "Singapore Airlines";
        obj.desc = "Mobile app for flight checkin, checking flight status and saving boarding passes on the device.";
        obj.link = "https://itunes.apple.com/us/app/singapore-airlines/id515287841?mt=8";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "Flight Status for AirAsia";
        obj.desc = "Mobile app for getting the Flight schedule and Flight Status of AirAsia flights.";
        obj.link = "https://itunes.apple.com/my/app/flight-status-for-airasia/id921458833?mt=8";
        this.mobileApps_arr.push(obj);
        obj = {};
        obj.title = "Delhi Hospitals & Blood Bank";
        obj.desc = "The app displays the list of all Govt Hospitals and Blood Banks in Delhi with their address and contact details.";
        obj.link = "https://itunes.apple.com/my/app/delhi-hospitals-blood-bank/id912238664?mt=8";
        this.mobileApps_arr.push(obj);
    };
    TablesComponent.prototype.openBrowser = function (url) {
        window.open(url, '_blank');
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    core_1.Component({
        selector: 'app-tables',
        template: __webpack_require__("./src/app/tables/tables.component.html"),
        styles: [__webpack_require__("./src/app/tables/tables.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/tables.component.js.map

/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = "ul li {\n    float: left;\n    width: 200px;\n    height: auto;\n}\n\n.errorMessage_class {\n    width: 40%;\n    font-size: 16px\n}\n\n.youtube_class {\n    padding: 20px;\n    border: 1px solid lightgray;\n}"

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button (click)=\"expandFaceDetectionSection()\" class=\"btn btn-primary btn-fill my-2\">\n                    Try Face Detection\n                </button>\n            </div>\n        </div>\n\n\n\n        <div class=\"row\" style=\"padding-top:20px\">\n            <div class=\"col-md-6\">\n                <video id=\"video2\" style=\"display:none\" width=\"90%\" height=\"100%\" autoplay></video>\n            </div>\n\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger text-center errorMessage_class\">{{errorMessage}}</div>\n\n\n            <div class=\"col-md-6\" id=\"myCanvasDiv\" style=\"display:none;\">\n\n                <!-- <button (click)=\"processImage()\" class=\"btn btn-fill btn-primary\">Take picture</button> -->\n\n                <button id=\"capture\" class=\"btn btn-fill btn-primary pull-right\">Take picture</button>\n                <canvas id=\"myCanvas\"></canvas>\n\n                <ul class=\"list-group\" style=\"margin-top:20px\" *ngIf=\"faceApiResponse\">\n                    <li class=\"list-group-item\">\n                        Gender : {{faceApiResponse[0]?.faceAttributes?.gender}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Smiling : {{faceApiResponse[0]?.faceAttributes?.smile | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Anger : {{faceApiResponse[0]?.faceAttributes?.emotion?.anger | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Age : {{faceApiResponse[0]?.faceAttributes?.age}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Happiness : {{faceApiResponse[0]?.faceAttributes?.emotion?.happiness | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Sadness : {{faceApiResponse[0]?.faceAttributes?.emotion?.sadness | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Glasses : {{faceApiResponse[0]?.faceAttributes?.glasses}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Neutral : {{faceApiResponse[0]?.faceAttributes?.emotion?.neutral | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Fear : {{faceApiResponse[0]?.faceAttributes?.emotion?.fear | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Moustache : {{faceApiResponse[0]?.faceAttributes?.facialHair?.moustache | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Surprise : {{faceApiResponse[0]?.faceAttributes?.emotion?.surprise | percent}}\n                    </li>\n                    <li class=\"list-group-item\">\n                        Disgust : {{faceApiResponse[0]?.faceAttributes?.emotion?.disgust | percent}}\n                    </li>\n                </ul>\n\n\n                <div id=\"loader\" *ngIf=\"isRequestProcessing\" style=\"margin-left:35%\">\n                    <img src=\"assets/img/loader-preview.svg\" alt=\"loading\">\n                </div>\n\n\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <canvas id=\"myCanvas\"></canvas>\n                    </div>\n                </div> -->\n\n\n                <!-- \n                <div class=\"card\" id=\"myCanvasDiv\">\n                    <div class=\"content\">\n\n                        <canvas id=\"myCanvas2\" width=\"100%\" height=\"400px\"></canvas>\n                    </div>\n                </div> -->\n\n                <!-- <video id=\"video2\" #video2 width=\"400\" height=\"450\" controls autoplay></video> -->\n                <!-- <img *ngIf=\"!faceApiResponse\" [src]=\"imageString\" id=\"photo\" alt=\"imageString\" width=\"100%\" height=\"400px\"> -->\n\n\n\n\n            </div>\n\n            <!-- <div class=\"col-md-6\">\n                    <div *ngIf=\"faceApiResponse\">\n\n\n                        <div class=\"card1\" style=\"margin-top:40px\">\n\n\n                            <canvas id=\"myCanvas\" width=\"100%\" height=\"400px\"></canvas>\n\n\n                            <ul class=\"list-group\" style=\"margin-top:40px\">\n                                <li class=\"list-group-item\">\n                                    Gender : {{faceApiResponse[0]?.faceAttributes?.gender}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Smiling : {{faceApiResponse[0]?.faceAttributes?.smile | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Anger : {{faceApiResponse[0]?.faceAttributes?.emotion?.anger | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Age : {{faceApiResponse[0]?.faceAttributes?.age}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Happiness : {{faceApiResponse[0]?.faceAttributes?.emotion?.happiness | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Sadness : {{faceApiResponse[0]?.faceAttributes?.emotion?.sadness | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Glasses : {{faceApiResponse[0]?.faceAttributes?.glasses}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Neutral : {{faceApiResponse[0]?.faceAttributes?.emotion?.neutral | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Fear : {{faceApiResponse[0]?.faceAttributes?.emotion?.fear | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Moustache : {{faceApiResponse[0]?.faceAttributes?.facialHair?.moustache | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Surprise : {{faceApiResponse[0]?.faceAttributes?.emotion?.surprise | percent}}\n                                </li>\n                                <li class=\"list-group-item\">\n                                    Disgust : {{faceApiResponse[0]?.faceAttributes?.emotion?.disgust | percent}}\n                                </li>\n                            </ul>\n\n\n\n                        </div>\n                    </div>\n                </div>\n                 -->\n            <!-- </div> -->\n\n        </div>\n\n\n        <br/>\n\n\n\n        <hr style=\"border-color: lightgrey\" />\n\n        <div class=\"row\" style=\"padding-top:40px;\">\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <iframe class=\"youtube_class\" width=\"100%\" height=\"500px\" [src]=\"objDetectionURL1 | safe\">\n                    </iframe>\n                    <div class=\"content\">\n                        <p class=\"description text-center\">\n                            Object Detection using Tensorflow\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <iframe class=\"youtube_class\" width=\"100%\" height=\"500px\" [src]=\"objDetectionURL2 | safe\">\n                    </iframe>\n                    <div class=\"content\">\n                        <p class=\"description text-center\">\n                            Object Detection using Tensorflow\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Light Bootstrap Table Heading</h4>\n                        <p class=\"category\">Created using Roboto Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Light Bootstrap Table Heading </h1>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Light Bootstrap Table Heading</h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Light Bootstrap Table Heading</h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Light Bootstrap Table Heading</h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Light Bootstrap Table Heading</h5>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Light Bootstrap Table Heading</h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                                </p>\n                                <small>\n                                    Steve Jobs, CEO Apple\n                                </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n\n                            <p class=\"category\">Coloured Text\n                            </p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n\n        </div>\n\n\n\n        <div class=\"row\">\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <iframe class=\"youtube_class\" width=\"100%\" height=\"500px\" [src]=\"faceRecognitionURL1 | safe\">\n                    </iframe>\n                    <div class=\"content\">\n                        <p class=\"description text-center\">\n                            Face Recognition using Python\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <!-- <iframe style=\"border:1px solid lightgray\" width=\"100%\" height=\"500px\" [src]=\"objDetectionURL2 | safe\">\n                    </iframe> -->\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var face_recognition_service_1 = __webpack_require__("./src/app/services/face-recognition.service.ts");
var abstract_camera_service_1 = __webpack_require__("./src/app/services/abstract-camera.service.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var TypographyComponent = (function () {
    function TypographyComponent(faceRecognitionService, cameraService) {
        this.faceRecognitionService = faceRecognitionService;
        this.cameraService = cameraService;
        this.imageString = '';
        // faceApiResponse: Observable<FaceRecognitionResponse>;
        this.faceApiResponse = null;
        this.isFaceDetectionDivOpen = false;
        this.isRequestProcessing = false;
        this.errorMessage = "";
        this.objDetectionURL1 = "https://www.youtube.com/embed/scEO0yKtmDQ";
        this.objDetectionURL2 = "https://www.youtube.com/embed/56qHb-tLvuc";
        this.faceRecognitionURL1 = "https://www.youtube.com/embed/TNDluRC6M5Q";
    }
    TypographyComponent.prototype.ngOnInit = function () {
        var random = Math.round((Math.random() % 100) * 10);
        this.subscriptionKey = (random % 2 == 0) ? environment_1.environment.subscriptionKey1 : environment_1.environment.subscriptionKey2;
    };
    TypographyComponent.prototype.ngAfterViewInit = function () {
    };
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.stopMediaStreaming();
    };
    TypographyComponent.prototype.stopMediaStreaming = function () {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                // var track = stream.getTracks()[0];
                // track.stop();
                // stream.getVideoTracks()[0].stop(); // Recommended
                stream.getTracks().forEach(function (track) { return track.stop(); });
            }).catch(function (e) {
                console.log("Exception while stopping the streaming media");
            });
        }
    };
    TypographyComponent.prototype.expandFaceDetectionSection = function () {
        this.isFaceDetectionDivOpen = !this.isFaceDetectionDivOpen;
        if (this.isFaceDetectionDivOpen) {
            document.getElementById('video2').style.display = 'block';
            document.getElementById('myCanvasDiv').style.display = 'block';
            this.initializeVideoCapture();
        }
        else {
            this.stopMediaStreaming();
            document.getElementById('video2').style.display = 'none';
            document.getElementById('myCanvasDiv').style.display = 'none';
        }
    };
    TypographyComponent.prototype.initializeVideoCapture = function () {
        var _this = this;
        var self = this;
        var video = document.getElementById('video2');
        // console.log("Video 111 : " + video);
        if (video) {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    //video.play();
                    video.srcObject = stream;
                }).catch(function (e) {
                    self.errorMessage = "No Camera found";
                    document.getElementById('video2').style.display = 'none';
                    document.getElementById('myCanvasDiv').style.display = 'none';
                });
                // Capture images from Video
                var canvas_1 = document.getElementById('myCanvas');
                var context_1 = canvas_1.getContext('2d');
                context_1.canvas.width = video.clientWidth * 0.8;
                context_1.canvas.height = video.clientHeight * 1.0;
                var captureButton = document.getElementById('capture');
                captureButton.addEventListener('click', function () {
                    // Draw the video frame to the canvas.
                    context_1.drawImage(video, 0, 0, canvas_1.width, canvas_1.height);
                    var base64Image = canvas_1.toDataURL("image/jpeg");
                    _this.processImage(base64Image);
                });
            }
            else {
                self.errorMessage = "No Camera found";
                document.getElementById('video2').style.display = 'none';
                document.getElementById('myCanvasDiv').style.display = 'none';
            }
        }
        else {
            console.log("Video is empty.");
        }
    };
    TypographyComponent.prototype.processImage = function (base64Image) {
        var self = this;
        self.imageString = base64Image;
        self.isRequestProcessing = true;
        self.faceRecognitionService.scanImage(self.subscriptionKey, self.imageString //base64Image
        ).subscribe(function (result) {
            console.log("faceApiResponse response : " + JSON.stringify(result));
            //console.log("typeof : " + typeof (result));
            self.isRequestProcessing = false;
            if (result && (typeof (result) == "object")) {
                self.faceApiResponse = result;
                //======== Draw Rect on the image Start ===========
                var left = result[0].faceRectangle.left;
                var top = result[0].faceRectangle.top - 10;
                var width = result[0].faceRectangle.width;
                var height = result[0].faceRectangle.height + 10;
                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
                ctx.beginPath();
                ctx.rect(left, top, width, height);
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'green';
                ctx.stroke();
                //======== Draw Rect on the image End ===========
            }
        }, function (err) {
            console.log("Error : " + JSON.stringify(err));
        });
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    core_1.Component({
        selector: 'app-typography',
        template: __webpack_require__("./src/app/typography/typography.component.html"),
        styles: [__webpack_require__("./src/app/typography/typography.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof face_recognition_service_1.FaceRecognitionService !== "undefined" && face_recognition_service_1.FaceRecognitionService) === "function" && _a || Object, typeof (_b = typeof abstract_camera_service_1.AbstractCameraService !== "undefined" && abstract_camera_service_1.AbstractCameraService) === "function" && _b || Object])
], TypographyComponent);
exports.TypographyComponent = TypographyComponent;
var _a, _b;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/typography.component.js.map

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">LBD Angular CLI PRO</h4>\n                        <p class=\"category\">Looking for more components? Please check our Premium Version of Light Bootstrap Dashboard.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-center\">Free</th>\n                                    <th class=\"text-center\">PRO</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>115+</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>14+</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>22+</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td>\n                                        <i class=\"fa fa-times text-danger\"></i>\n                                    </td>\n                                    <td>\n                                        <i class=\"fa fa-check text-success\"></i>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    core_1.Component({
        selector: 'app-upgrade',
        template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
        styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UpgradeComponent);
exports.UpgradeComponent = UpgradeComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/upgrade.component.js.map

/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n        <!-- Certification 1 -->\n\n        <div *ngFor=\"let cert of cert_arr; let i=index\">\n\n            <div class=\"row\" *ngIf=\"i%2==0\">\n\n                <div class=\"col-md-6\" *ngFor=\"let j of [0,1]\">\n                    <div class=\"card\" *ngIf=\"i+j < cert_arr.length\">\n\n                        <div class=\"image\" style=\"height:530px; padding:20px\">\n                            <img [src]=\"cert_arr[i+j].image\" height=\"510px\" />\n                        </div>\n                        <div class=\"content\">\n                            <p class=\"description text-center\">\n                                {{cert_arr[i+j].name}}\n                                <!-- \"Lamborghini Mercy\n                                 <br> Your chick she so thirsty\n                                <br> I'm in that two seat Lambo\" -->\n                            </p>\n                        </div>\n\n                    </div>\n                </div>\n\n\n            </div>\n\n        </div>\n\n\n\n        <!-- \n        <div class=\"row\">\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" />\n                    </div>\n                    <div class=\"content\">\n                        <p class=\"description text-center\"> \"Lamborghini Mercy\n                            <br> Your chick she so thirsty\n                            <br> I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" />\n                    </div>\n                    <div class=\"content\">\n\n                        <p class=\"description text-center\"> \"Lamborghini Mercy\n                            <br> Your chick she so thirsty\n                            <br> I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n        </div> -->\n\n        <!-- Certification 2 -->\n\n\n\n        <div class=\"row\">\n            <!-- \n            <div class=\"col-md-6\">\n                <div class=\"card\">\n\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" />\n                    </div>\n                    <div class=\"content\">\n                        <p class=\"description text-center\"> \"Lamborghini Mercy\n                            <br> Your chick she so thirsty\n                            <br> I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\" />\n                    </div>\n                    <div class=\"content\">\n\n                        <p class=\"description text-center\"> \"Lamborghini Mercy\n                            <br> Your chick she so thirsty\n                            <br> I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n\n                </div>\n            </div> -->\n\n            <!-- <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Company (disabled)</label>\n                                        <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>First Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Address</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>City</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Postal Code</label>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                <h4 class=\"title\">Mike Andrew<br />\n                                    <small>michael24</small>\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                            Your chick she so thirsty <br>\n                            I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div> -->\n\n\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var UserComponent = (function () {
    function UserComponent() {
        this.cert_arr = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var cert = null;
        cert = {};
        cert.image = "assets/img/certifications/Coursera_machine_learning.png";
        cert.name = "Coursera - Machine Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_course1.png";
        cert.name = "Coursera - Neural Networks and Deep Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_course2.png";
        cert.name = "Coursera - Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_course3.png";
        cert.name = "Coursera - Structuring Machine Learning Projects";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_course4.png";
        cert.name = "Coursera - Convolutional Neural Networks";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_course5.png";
        cert.name = "Coursera - Sequence Models";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Cousera_deep_learning.png";
        cert.name = "Coursera - Deep Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_how_google_does_ml.png";
        cert.name = "Coursera - How Google does Machine Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Coursera_tensorflow.png";
        cert.name = "Coursera - Serverless Machine Learning with Tensorflow on Google Cloud Platform";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/NPTEL_Intro_to_machine_learning.jpg";
        cert.name = "NPTEL - Introduction to Machine Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Udemy_openCV.jpg";
        cert.name = "Udemy - Computer Vision with OpenCV using Python";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Udemy_Intro_to_machine_learning.jpg";
        cert.name = "Udemy - Introduction to Machine Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Udemy_Intro_machine_learning_begineers.jpg";
        cert.name = "Udemy - Machine Learning";
        this.cert_arr.push(cert);
        cert = {};
        cert.image = "assets/img/certifications/Udemy_Chatbots.jpg";
        cert.name = "Udemy - Making Chatbot & Voice Apps";
        this.cert_arr.push(cert);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html"),
        styles: [__webpack_require__("./src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/user.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    subscriptionKey1: "e55aa00b79bd4f0498ce0277061fcc42",
    subscriptionKey2: "3c3ea89e26b34c82aec68863080ccb76",
    endpoint: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect',
};
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/Users/biranchi/Desktop/Github Protfolio/MyPortfolio CustomTheme/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map