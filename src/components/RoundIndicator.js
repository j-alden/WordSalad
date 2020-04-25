import React from 'react';
import {
  ProgressIndicator,
  ProgressStep,
  ButtonGroup,
  ButtonIcon,
  Button,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const stepNames = ['Setup', 'Round 1', 'Round 2', 'Round 3', 'Results'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs((props) => {
  return props.theme.rainbow.palette;
})`
  color: ${(props) => props.text.main};
`;

class RoundIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepIndex: 0,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleNextClick() {
    const { currentStepIndex } = this.state;
    if (currentStepIndex < stepNames.length - 1) {
      const nextStepIndex = currentStepIndex + 1;
      return this.setState({ currentStepIndex: nextStepIndex });
    }
    return this.setState({ isNextDisabled: false });
  }

  handleBackClick() {
    const { currentStepIndex } = this.state;
    if (currentStepIndex > 0) {
      const previewStepIndex = currentStepIndex - 1;
      this.setState({ currentStepIndex: previewStepIndex });
    }
  }

  isNextDisabled() {
    const { currentStepIndex } = this.state;
    if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
      return false;
    }
    return true;
  }

  isBackDisabled() {
    const { currentStepIndex } = this.state;
    if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
      return false;
    }
    return true;
  }

  render() {
    const { currentStepIndex } = this.state;
    return (
      <div className='rainbow-m-bottom_large rainbow-p-bottom_large'>
        <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
          <ProgressStep name='step-1' label='Setup' />
          <ProgressStep name='step-2' label='Round 1' />
          <ProgressStep name='step-3' label='Round 2' />
          <ProgressStep name='step-4' label='Round 3' />
          <ProgressStep name='step-5' label='Results' />
        </ProgressIndicator>
        {/* <div className='rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap'>
          <StyledIndicatorText>{`This is the ${steps[currentStepIndex]} step`}</StyledIndicatorText>
        </div> */}
        <div className='rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap'>
          <Button
            label='Back'
            onClick={this.handleBackClick}
            variant='neutral'
            disabled={this.isBackDisabled()}
            className='rainbow-m-horizontal_medium'
          />
          <Button
            label='Next'
            onClick={this.handleNextClick}
            variant='brand'
            disabled={this.isNextDisabled()}
            className='rainbow-m-horizontal_medium'
          />
        </div>
      </div>
    );
  }
}

export default RoundIndicator;
