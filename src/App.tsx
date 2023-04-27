import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Todos from './components/Todos';
export default function App() {
  return (
    <RecoilRoot>
      <Header />
      <Todos />
    </RecoilRoot>
  );
}
