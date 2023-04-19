import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import { useState } from 'react'

const testimonials = [
  [
    {
      content:
        '',
      author: {
        name: 'Cornelius Boateng',
        role: ' Kehillah Global Intern, 2021',
        image: avatarImage1,
      },
    },
    {
      author: {
        name: 'Eric Asare',
        role: 'Research Assistant @ New York University Google Intern, 2022',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Pascal Nabare',
        role: 'TA @ Princeton University | Uber Intern, 2022',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Michael Tenkorang',
        role: 'Microsoft Intern, 2023',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Emmanuel Asumang',
        role: 'Microsoft Intern, 2023',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      author: {
        name: 'Afua Ansah',
        role: 'Teaching Assistant @ Cornell University | Google Intern, 2022',
        image: avatarImage5,
      },
    },
    {
      author: {
        name: 'Julian Kodua',
        role: 'TA @ Yale University | Google Intern, 2023',
        image: avatarImage2,
      },
    },
    {
      author: {
        name: 'Daisy Azagba',
        role: 'Kehillah Global Intern, 2023',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Justice Korku',
        role: 'Spowse Intern, 2023',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Faith Cyril',
        role: 'Amazon Intern, 2023',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Bridget Duah',
        role: 'Microsoft Intern, 2023',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      author: {
        name: 'Wisdom Okwen',
        role: 'ServiceNow Intern, 2023',
        image: avatarImage3,
      },
    },
    {
      author: {
        name: 'Emmanuel Dodoo',
        role: 'TA @ Cornell University',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Abdul Karim Abdul Rauf',
        role: 'Salesforce Intern, 2023',
        image: avatarImage4,
      },
    },
    {
      author: {
        name: 'Simon Doku',
        role: 'Twilio Intern, 2023',
        image: avatarImage4,
      },
    }, {
      author: {
        name: 'Simon Doku',
        role: 'Twilio Intern, 2023',
        image: avatarImage4,
      },
    },
  ],
]

export function Testimonials() {

  const [viewAllMembers, setViewAllMembers] = useState(false);

  const viewAllMembersHander = () => {
    setViewAllMembers(!viewAllMembers);
  }

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Our Team and Beneficiaries
          </h2>
          <p className="text-lg tracking-tight text-amber-500 font-medium">
            Our team comprises passionate individuals who are skilled at teaching, programming, mentoring and building cool stuff!</p>
          <p className="text-lg tracking-tight text-gray-500 font-medium">We have assisted about 20 people in bagging amazing offers at awesome big-tech companies and startups!</p>
        </div>
        <p className="mt-4">*TA - Teaching Assistant</p>
        <ul
          role="list"
          className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className={"progress-list-container flex flex-col gap-y-6 sm:gap-y-8 " + (viewAllMembers ? "" : "h-4/6 ")}  ><div className='h-full'>

                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="mt-4">
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <div className="font-display text-base text-amber-900">
                        {testimonial.author.name}
                      </div>
                      <figcaption className="relative flex items-center justify-between border-t border-slate-100 ">
                        <div>

                          <div className="text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </div></ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
