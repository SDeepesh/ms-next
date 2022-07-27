import clsx from 'clsx';

const Button = ({ type = 'button', children, isPill, isGhost, isDisabled }) => {
  const classes = clsx('button', {
    'button--pill': isPill,
    'button--ghost': isGhost,
  });

  return (
    <button className={classes} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
