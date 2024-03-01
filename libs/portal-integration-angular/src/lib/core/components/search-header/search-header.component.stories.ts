import { StorybookTranslateModule } from './../../storybook-translate.module'
import { Meta, moduleMetadata, applicationConfig, StoryFn } from '@storybook/angular'
import { importProvidersFrom } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchHeaderComponent } from './search-header.component'
import { Action, PageHeaderComponent } from '../page-header/page-header.component'
import { RouterModule } from '@angular/router'
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { ButtonModule } from 'primeng/button'
import { MenuModule } from 'primeng/menu'
import { SkeletonModule } from 'primeng/skeleton'
import { StorybookBreadcrumbModule } from '../../storybook-breadcrumb.module'
import { InputTextModule } from 'primeng/inputtext'
import { SearchConfigComponent } from '../search-config/search-config.component'
import { ReactiveFormsModule } from '@angular/forms'
import { PrimeIcons } from 'primeng/api'
import { SearchConfig } from '../../../model/search-config'
const SearchHeaderComponentSBConfig: Meta<SearchHeaderComponent> = {
  title: 'SearchHeaderComponent',
  component: SearchHeaderComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserModule),
        importProvidersFrom(BrowserAnimationsModule),

        importProvidersFrom(RouterModule.forRoot([], { useHash: true })),
      ],
    }),
    moduleMetadata({
      declarations: [SearchHeaderComponent, SearchConfigComponent, PageHeaderComponent],
      imports: [
        MenuModule,
        BreadcrumbModule,
        ButtonModule,
        SkeletonModule,
        InputTextModule,
        StorybookTranslateModule,
        ReactiveFormsModule,
        StorybookBreadcrumbModule.init([
          { label: 'Level 1', routerLink: ['/something'] },
          { label: 'Level 2', url: '/' },
        ]),
      ],
    }),
  ],
}
const Template: StoryFn = (args) => ({
  props: args,
})

export const Basic = {
  render: Template,
}

export const WithBreadcrumbs = {
  render: Template,
  args: {
    manualBreadcrumbs: true,
  },
}

export const WithSearchInputs = {
  render: (args: SearchHeaderComponent) => ({
    props: {
      ...args,
    },
    template: `
        <ocx-search-header
            [manualBreadcrumbs]="${args.manualBreadcrumbs}"
        >
            <form>
                <div class="grid mt-0 p-fluid">
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'First name' | translate
                            }}</label>
                        </span>
                    </div>
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'Last name' | translate
                            }}</label>
                        </span>
                    </div>
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'Birthday' | translate
                            }}</label>
                        </span>
                    </div>
                </div>
            </form>
        </ocx-search-header>
            `,
  }),
  args: {
    manualBreadcrumbs: true,
  },
}

export const WithSearchInputsAndResetButton = {
  render: (args: SearchHeaderComponent) => ({
    props: {
      ...args,
    },
    template: `
        <ocx-search-header
            (resetted)="console.log($event)"
            [manualBreadcrumbs]="${args.manualBreadcrumbs}"
        >
            <form>
                <div class="grid mt-0 p-fluid">
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'First name' | translate
                            }}</label>
                        </span>
                    </div>
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'Last name' | translate
                            }}</label>
                        </span>
                    </div>
                    <div class="col-12 md:col-3">
                        <span class="p-float-label">
                            <input
                                id="name-input"
                                pInputText
                                type="text"
                                class="p-inputtext p-component"
                            />
                            <label for="name-input">{{
                                'Birthday' | translate
                            }}</label>
                        </span>
                    </div>
                </div>
            </form>
        </ocx-search-header>
            `,
  }),
  args: {
    manualBreadcrumbs: true,
  },
}
const demoActions: Action[] = [
    {
      label: 'Action 1 With Long Text',
      actionCallback: () => {
        console.log(`you clicked 'Reload'`)
      },
      title: 'Tooltip for Reload',
      show: 'always',
      icon: PrimeIcons.REFRESH,
    },
    {
      label: 'Action 2',
      actionCallback: () => {
        console.log(`you clicked 'Delete'`)
      },
      title: 'Tooltip for Delete',
      show: 'always',
      icon: PrimeIcons.TRASH,
    },
    {
        label: 'A3',
        actionCallback: () => {
          console.log(`you clicked 'Delete'`)
        },
        title: 'Tooltip for Delete',
        show: 'always',
        icon: PrimeIcons.TRASH,
      },
    {
      label: 'Some action',
      actionCallback: () => {
        console.log(`you clicked 'Some action'`)
      },
      show: 'asOverflow',
    },
    {
      label: 'Other action',
      actionCallback: () => {
        console.log(`you clicked 'Other Action'`)
      },
      show: 'asOverflow',
    },
    {
      label: 'Disabled',
      actionCallback: () => {
        console.log(`you clicked 'Disabled'`)
      },
      title: 'Tooltip for Disabled',
      disabled: true,
    },
  ]
export const WithAdditionalActions = {
    render: Template,
    args: {
      manualBreadcrumbs: true,
      actions: demoActions,
      subheader: "This is a subheader with a higher amount of characters."
    },
}

const demoConfigs: SearchConfig[] = [
    {
        id: "id",
        name: "TestConfig",
        fieldListVersion: 1,
        isReadonly: false,
        isAdvanced: false,
        values: {
            "Test": "Test"
        }
    },
    {
        id: "id2",
        name: "TestConfig2",
        fieldListVersion: 1,
        isReadonly: false,
        isAdvanced: false,
        values: {
            "Test": "Test"
        }
    }
]

export const WithAdditionalActionsAndSearchConfigs = {
    render: Template,
    args: {
      manualBreadcrumbs: true,
      actions: demoActions,
      subheader: "This is a subheader with a higher amount of characters.",
      searchConfigs: demoConfigs
    },
}

export default SearchHeaderComponentSBConfig
