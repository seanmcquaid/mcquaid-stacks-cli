import PageWrapper from '@/components/app/PageWrapper';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/i18n/useAppTranslation';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectCounterValue } from '@/store/counter/selectors';
import { increment, decrement } from '@/store/counter/slice';

const ReduxToolkitPage = () => {
  const { t } = useAppTranslation();
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCounterValue);

  const handleIncrementOnClick = () => {
    dispatch(increment());
  };

  const handleDecrementOnClick = () => {
    dispatch(decrement());
  };

  return (
    <PageWrapper>
      <span>{value}</span>
      <Button onClick={handleIncrementOnClick}>
        {t('ReduxToolkitPage.increment')}
      </Button>
      <Button onClick={handleDecrementOnClick}>
        {t('ReduxToolkitPage.decrement')}
      </Button>
    </PageWrapper>
  );
};

export default ReduxToolkitPage;
