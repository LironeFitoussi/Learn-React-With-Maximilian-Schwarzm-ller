// Styles
import classes from './loading.module.css';

export default function MealsLoadinPage() {
  return (
    <p className={classes.loading}>
        Fetching meals...
    </p>
  );
}