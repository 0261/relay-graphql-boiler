import { Environment, RecordSource, Store } from 'relay-runtime';
import { RelayNetworkLayer, urlMiddleware, retryMiddleware, RelayRequestAny, AbortFn } from 'react-relay-network-modern/es';

const source: RecordSource = new RecordSource();
const store: Store = new Store(source);
let environment: Environment | null = null;
type Meta = {
  forceRetry: Function;
  abort: AbortFn;
  delay: number;
  attempt: number;
  lastError: Error | null;
  req: RelayRequestAny;
};

export function createEnvironment(): Environment {

  if (environment) {
    return environment;
  }

  environment = new Environment({
    network: new RelayNetworkLayer([
      urlMiddleware({
        url: () => 'http://localhost:3000/graphql',
      }),
      retryMiddleware({
        fetchTimeout: 5000,
        beforeRetry: (meta: Meta) => {
          if (meta.attempt > 3) {
            meta.abort();
          }
        },
      }),
    ]),
    store,
  });

  return environment;
}
