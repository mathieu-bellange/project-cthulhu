export const DEFINE_FULL_SCREEN = 'DEFINE_FULL_SCREEN';

export const defineFullScreen = (isFullScreen) => ({
    type: DEFINE_FULL_SCREEN,
    payload: isFullScreen
});
