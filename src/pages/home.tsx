import { useStore } from '@/store';

export function Home() {
  const bears = useStore.use.bears();
  const addBear = useStore.use.addBear();
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="mt-8 text-xl">
            Nice to see you here! This is my react starter template. I hope you
            like it!
          </h1>
          <div className="mt-8">
            bears: {bears}
            <button
              className="px-3 ml-5 leading-7 text-white rounded cursor-pointer bg-neutral-400"
              onClick={addBear}
            >
              add bear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
