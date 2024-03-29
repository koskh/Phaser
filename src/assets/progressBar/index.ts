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
  width: 4, // initial width
  height: progressBarOuterProps.height - 2,
  color: progressBarOuterProps.color,
};
