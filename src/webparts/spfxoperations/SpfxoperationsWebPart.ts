import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'SpfxoperationsWebPartStrings';
import Spfxoperations from './components/Spfxoperations';
import { ISpfxoperationsProps } from './components/ISpfxoperationsProps';

export interface ISpfxoperationsWebPartProps {
  description: string;
}

export default class SpfxoperationsWebPart extends BaseClientSideWebPart<ISpfxoperationsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxoperationsProps > = React.createElement(
      Spfxoperations,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
