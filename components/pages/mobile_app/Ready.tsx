export function Ready() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pt-12 pb-6 px-6 border border-b-[#7F7F7F1F]">
      <div className="rounded-[20px] md:rounded-[56px] bg-dark px-3 lg:px-[128px]">
        <div className="flex flex-col gap-4 items-center pb-5 pt-10 md:py-[80px] lg:py-[120px] bg-[url('/images/Mobile-App-CTA-BG.webp')] bg-center bg-cover">
          <h2 className="text-white">Ready to start investing?</h2>
          <p className="lg:w-[60%] w-[80%] text-center primary-text text-[#FFFFFF99]">
            Join thousands of successful investors who trust our app to manage
            their investments. Download now and transform your financial future
          </p>
          <form className="md:w-[50%] w-[80%] flex md:flex-row flex-col gap-[15px] items-center">
            <div className="w-full flex rounded-[12px] bg-white p-2">
              <div className="m-[6px]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#11111199"
                    d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"
                  ></path>
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="outline-none w-full"
              />
            </div>
            <button className="flex items-center w-full md:w-max justify-center py-[14px] px-5 bg-primary rounded-[12px] border border-[#4F4F4F1A] cursor-pointer font-medium text-[16px] leading-[16px] text-white">
              <p>Get Started</p>
              <p className="text-[20px]">&gt;</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
