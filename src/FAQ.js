import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is Mastodon?",
    answer:
      "Mastodon is a free, open-source social network server. A decentralized alternative to commercial platforms, it avoids the risks of a single company monopolizing your communication. Anyone can run Mastodon like Veganism Social does and participate in the social network seamlessly.",
  },
  {
    question: "What is the difference between Mastodon and Veganism Social?",
    answer:
      "Mastodon is the software that powers Veganism Social. This allows you to communicate with everyone on Veganism Social AND the users of other Mastodon instances.",
  },
  {
    question: "I'm not vegan. Can I still join?",
    answer:
      "No, you cannot. Veganism Social is a vegan-only social network.",
  },
  {
    question: "Is there an app for Veganism Social?",
    answer:
      "You can use any Mastodon-compatible app to access Veganism Social. We recommend using Ivory on iOS and Tusky on Android.",
  },
  {
    question: "What is the character limit?",
    answer:
      "10,000 characters.",
  },
  {
    question: "Do you federate with Threads.net?",
    answer:
      "No, because we do not want to federate with a platform that allows hate speech.",
  },
  {
    question: "Are there any ads?",
    answer:
      "There are no paid advertisements on Veganism Social. We lightly promote vegan activists and organizations for free.",
  },
  {
    question: "How can I contact Veganism Social?",
    answer:
      "You can email us at admin@veganism.social or send @nm a direct message.",
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
