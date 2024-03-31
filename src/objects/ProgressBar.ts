// TODO: make as Phaser.Scene or Phaser.Sprite class
export const progressBarOuterProps = {
  x: 512,
  y: 384,
  width: 468,
  height: 16,
  color: 0xffffff,
  stroke: 2,
};

const innerBarPadding = progressBarOuterProps.stroke * 2;
const innerBarOffset = progressBarOuterProps.width / 2 - innerBarPadding;
export const progressBarInnerProps = {
  x: progressBarOuterProps.x - innerBarOffset,
  y: progressBarOuterProps.y,
  initialWidth: 1,
  maxWidthWidth: progressBarOuterProps.width - innerBarPadding * 2,
  height: progressBarOuterProps.height - 2,
  color: progressBarOuterProps.color,
};
