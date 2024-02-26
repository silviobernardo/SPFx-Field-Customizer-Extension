import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';

const iconClass = mergeStyles({
  fontSize: 15,
  height: 15,
  width: 15,
  margin: '0 7px',
});

export interface IRatingFieldCustomizerComponentProps {
  value: number;
}

const LOG_SOURCE: string = 'RatingFieldCustomizerComponent';

export default class RatingFieldCustomizerComponent extends React.Component<IRatingFieldCustomizerComponentProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: RatingFieldCustomizerComponent mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: RatingFieldCustomizerComponent unmounted');
  }

  public render(): React.ReactElement<{}> {
    const rating: React.ReactNode[] = [];
    for (let i = 1; i <= 5; i++) {
      if (this.props.value >= i) {
        rating.push(<FontIcon aria-label="FavoriteStartFill" iconName="FavoriteStarFill" className={iconClass} />);
      } else {
        rating.push(<FontIcon aria-label="FavoriteStart" iconName="FavoriteStar" className={iconClass} />);
      }
    }

    return (
      <div>
        {rating || null}
      </div>
    );
  }
}
