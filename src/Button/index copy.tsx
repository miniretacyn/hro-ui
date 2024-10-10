import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import * as vars from '../styles/var';
type Props = {
  /** default 线框，primary 实色框 */
  type?: 'default' | 'primary';
  /** 线框使用主题色 */
  active?: boolean;
  /** 设置按钮大小 */
  size?: 'middle' | 'small' | 'large';
  /** 禁用 */
  disabled?: boolean;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 按钮类型 */
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  /** 自定义className */
  className?: string;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置为展示的标签，比如div,a,button */
  as?: any;
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 设置按钮加载状态 */
  loading?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
  /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
  wait?: number | boolean;
};

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: 0.3s;
    box-shadow: 0 0 0 8px ${vars.themeColor};
  }
  &:active::after {
    box-shadow: none;
    opacity: 0.4;
    transition: 0s; /*取消过渡*/
  }
  &:hover {
    color: ${vars.themeColor};
    border-color: currentColor;
  }
  &.small {
    height: 24px;
    font-size: 12px;
  }
  &.middle {
    height: 32px;
    font-size: 14px;
  }
  &.large {
    height: 46px;
    font-size: 16px;
  }
  &.default {
    background-color: ${vars.white};
    border-color: ${vars.border};
    color: ${vars.themeTextColor};
    &:hover {
      background-color: ${vars.grey1};
    }
    &:active {
      background-color: ${vars.grey2};
    }
    &.active {
      color: ${vars.themeColor};
      border-color: ${vars.themeColor};
    }
    &.active:hover {
      background-color: ${vars.green1};
    }
    &.active:active {
      background-color: ${vars.green2};
    }
    &.active:disabled {
      opacity: 0.5;
    }
    &.danger {
      color: ${vars.textColorError};
      border-color: ${vars.textColorError};
    }
    &.danger:hover {
      background-color: ${vars.colorErrorHover};
    }
    &.danger:active {
      background-color: ${vars.colorErrorActive};
    }
  }

  &.primary {
    color: ${vars.white};
    background-color: ${vars.themeColor};
    border-color: ${vars.themeColor};
    &:hover {
      background-color: ${vars.themeHoverColor};
      border-color: ${vars.themeHoverColor};
    }
    &:active {
      background-color: ${vars.themeSelectColor};
    }
    &.danger {
      background-color: ${vars.textColorError};
      border-color: ${vars.textColorError};
    }
    &.danger:hover {
      background-color: ${vars.primaryDangerHover};
      border-color: ${vars.primaryDangerHover};
    }
    &.danger:active {
      background-color: ${vars.primaryDangerActive};
      border-color: ${vars.primaryDangerActive};
    }
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  &.block {
    width: 100%;
  }

  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &.dashed {
    border-style: dashed;
  }

  &.ghost {
    color: ${vars.border};
    background-color: transparent;
    border-color: ${vars.border};
  }
  &.ghost:hover {
    color: ${vars.border};
    background-color: transparent;
    border-color: ${vars.border};
  }

  &.anchor {
    height: unset;
    margin: unset;
    padding: unset;
    color: ${vars.themeColor};
    background: unset;
    border: none;
  }
`;
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    icon,
    children,
    type = 'default',
    disabled,
    block,
    active,
    danger,
    circle,
    dashed,
    loading,
    ghost,
    className,
    htmlType,
    onClick,
    wait,
    size = 'middle',
    ...rest
  } = props;

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={disabled}
      type={htmlType}
      className={clsx(
        'hro-btn',
        type,
        size,
        {
          disabled: disabled || loading,
          block: block,
          danger: danger,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          anchor: rest.as === 'a',
          active,
        },
        className,
      )}
    >
      {icon}
      {children}
    </StyledButton>
  );
});

Button.displayName = 'HRO-Button';

export default Button;
