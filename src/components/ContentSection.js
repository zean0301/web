
const stats = [
    { label: 'Business was founded', value: '2012' },
    { label: 'People on the team', value: '120+' },
    { label: 'Users on the platform', value: '250k' },
    { label: 'Paid out to creators', value: '$70M' },
]

const ContentSection = () => {

    return (
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.
                        </p>
                        <p className="mt-8">
                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                            auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                            hac adipiscing egestas.
                        </p>
                    </div>
                    <div>
                        <p>
                            Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                            eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                            voluptate.
                        </p>
                        <p className="mt-8">
                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                            auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                        </p>
                    </div>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                    {stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                            <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                            <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default ContentSection;