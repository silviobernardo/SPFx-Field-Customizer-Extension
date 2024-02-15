import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';

import styles from './FieldCustomizer.module.scss';

export interface IFieldCustomizerProps {
  // text: string;
  value: number;
}

const LOG_SOURCE: string = 'FieldCustomizer';

export default class FieldCustomizer extends React.Component<IFieldCustomizerProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldCustomizer mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldCustomizer unmounted');
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.fieldCustomizer}>
        <div className={styles.full} style={{ width: `${this.props.value}%` }}>
          {this.props.value}
        </div>
      </div>
    );
  }
}
