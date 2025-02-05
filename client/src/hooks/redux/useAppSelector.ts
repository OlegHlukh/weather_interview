import {useSelector} from 'react-redux';
import {TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
