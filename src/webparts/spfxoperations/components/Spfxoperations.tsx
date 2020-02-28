import * as React from 'react';
import styles from './Spfxoperations.module.scss';
import { ISpfxoperationsProps } from './ISpfxoperationsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {Helper} from 'spfxutility';

export default class Spfxoperations extends React.Component<ISpfxoperationsProps, {}> {
  public _helper:Helper;
public constructor(props)
{  super(props);
  this._helper = new Helper();   
}

  public render(): React.ReactElement<ISpfxoperationsProps> {
    this._helper.printConsole();
    return (
      <div className={ styles.spfxoperations }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
