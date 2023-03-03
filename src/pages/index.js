import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import ShowShifts from 'src/component/ShowShifts';

const queryClient = new QueryClient();

export default function Home() {
  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <ShowShifts/>

      </QueryClientProvider>
  );
}
