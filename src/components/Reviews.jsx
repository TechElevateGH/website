import { Container } from '@/components/Container'

const reviews = [
  [
    {
      author: 'TechElevate Inc',
      review:
        '............',
    },
    {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    },
  ],
  [
    {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    },
  ],
  [
    {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    }, {
      author: 'TechElevate Inc',
      review:
        '............',
    },
  ],
]

export function Reviews() {
  return (
    <section
      id="review"
      aria-labelledby="review-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="review-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Hear from some of our Members!
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {reviews.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((rev, revIndex) => (
                  <li key={revIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {rev.author}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{rev.review}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
