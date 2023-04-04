'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import * as Yup from 'yup'
import styles from '@styles/modules/Response.module.css'
import { useAnimation } from '@providers/AnimationContext'

const initialValues = {
  from_name: '',
  from_email: '',
  rsvp: '',
  food: '',
  dietary_requirements: '',
  dietary_requirement_specifics: '',
}

const initialStatus = {
  success: false,
  attempted: false,
  message: '',
}

const ResponseSchema = Yup.object().shape({
  from_name: Yup.string().required('* Name field is required'),
  from_email: Yup.string().email('Invalid email address').required('* Email field is required'),
  rsvp: Yup.string().required('* RSVP field is required'),
  food: Yup.string().when('rsvp', {
    is: 'Attending',
    then: Yup.string().required('* Food field is required'),
  }),
  dietary_requirements: Yup.string().when('rsvp', {
    is: 'Attending',
    then: Yup.string().required('* Dietary requirements field is required'),
  }),
  dietary_requirement_specifics: Yup.string().when('dietary_requirements', {
    is: 'Yes',
    then: Yup.string().required('* Dietary requirement specifics field is required'),
  }),
})

type StatusType = typeof initialStatus

interface ResponseFeedbackProps {
  status: StatusType
  actions: {
    setStatus: (status: StatusType) => void
    resetForm: () => void
  }
}

function ResponseFeedback({ status, actions }: ResponseFeedbackProps) {
  const { activateObserver } = useAnimation()

  const handleClick = () => {
    actions?.setStatus(initialStatus)
    actions?.resetForm()
    activateObserver()
  }

  return (
    <>
      <div className={styles['response-feedback']}>{status.message}</div>
      {!status.success && (
        <button onClick={handleClick} className={styles['response-retry']}>
          Try again
        </button>
      )}
    </>
  )
}

export default function ResponseForm() {
  return (
    <Formik
      initialValues={initialValues}
      initialStatus={initialStatus}
      validationSchema={ResponseSchema}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        try {
          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
              values,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(() => {
              console.log('Success:', values)
              setStatus({
                success: true,
                attempted: true,
                message: 'Thank you for your response!',
              })
            })
        } catch (err) {
          console.log('Error:', err)
          setStatus({
            success: false,
            attempted: true,
            message: 'Something went wrong. Please try again.',
          })
        }

        setSubmitting(false)
      }}>
      {({ values, setValues, isSubmitting, isValid, dirty, status, setStatus, resetForm }) => {
        useEffect(() => {
          if (values.rsvp === 'Not attending') {
            setValues({ ...values, food: 'Not applicable', dietary_requirements: 'Not applicable' })
          }
        }, [values.rsvp, setValues])

        useEffect(() => {
          if (
            values.rsvp === 'Attending' &&
            values.dietary_requirements === 'Not applicable' &&
            values.food === 'Not applicable'
          ) {
            setValues({ ...values, dietary_requirements: '', food: '' })
          }
        }, [values.rsvp, values.dietary_requirements, values.food, setValues])

        return (
          <>
            {!status.attempted ? (
              <Form className={`[ flow ] ${styles.response}`}>
                <div className={styles['response__section']}>
                  <label>
                    <span className={styles['response__label']}>Name(s)</span>
                    <Field name="from_name" type="text" tabIndex="0" />
                  </label>
                  <ErrorMessage component="div" className={styles['response__error']} name="from_name" />
                </div>

                <div className={styles['response__section']}>
                  <label>
                    <span className={styles['response__label']}>Email</span>
                    <Field name="from_email" type="email" tabIndex="0" />
                  </label>
                  <ErrorMessage component="div" className={styles['response__error']} name="from_email" />
                </div>

                <div className={styles['response__section']}>
                  <label>
                    <span className={styles['response__label']}>RSVP</span>
                    <Field name="rsvp" as="select" tabIndex="0">
                      <option value="" disabled>
                        Please select an option
                      </option>
                      <option value="Attending">I will be attending</option>
                      <option value="Not attending">I will not be attending</option>
                    </Field>
                  </label>
                  <ErrorMessage component="div" className={styles['response__error']} name="rsvp" />
                </div>

                <div
                  id="food-choice"
                  className={styles['response__section']}
                  role="group"
                  data-state={values.rsvp !== 'Attending' ? 'has-disabled' : null}>
                  <p aria-labelledby="food-choice" className={styles['response__label']}>
                    Food Choice
                  </p>

                  <div className={styles['response__group']}>
                    <label>
                      Meat
                      <Field
                        name="food"
                        type="radio"
                        value="Meat"
                        disabled={values.rsvp !== 'Attending'}
                        tabIndex="0"
                      />
                    </label>

                    <label>
                      Vegetarian
                      <Field
                        name="food"
                        type="radio"
                        value="Vegetarian"
                        disabled={values.rsvp !== 'Attending'}
                        tabIndex="0"
                      />
                    </label>

                    <label>
                      Vegan
                      <Field
                        name="food"
                        type="radio"
                        value="Vegan"
                        disabled={values.rsvp !== 'Attending'}
                        tabIndex="0"
                      />
                    </label>
                  </div>
                </div>
                <ErrorMessage component="div" className={styles['response__error']} name="food" />

                <div
                  id="dietary-requirements"
                  className={styles['response__section']}
                  role="group"
                  data-state={values.rsvp !== 'Attending' ? 'has-disabled' : null}>
                  <p aria-labelledby="dietary-requirements" className={styles['response__label']}>
                    Do you have any additional dietary requirements?
                  </p>

                  <div className={styles['response__group']}>
                    <label>
                      No
                      <Field
                        name="dietary_requirements"
                        type="radio"
                        value="No"
                        disabled={values.rsvp !== 'Attending'}
                        tabIndex="0"
                      />
                    </label>

                    <label>
                      Yes
                      <Field
                        name="dietary_requirements"
                        type="radio"
                        value="Yes"
                        disabled={values.rsvp !== 'Attending'}
                        tabIndex="0"
                      />
                    </label>
                  </div>
                </div>
                <ErrorMessage component="div" className={styles['response__error']} name="dietary_requirements" />

                <div
                  className={styles['response__section']}
                  data-state={values.dietary_requirements !== 'Yes' ? 'has-disabled' : null}>
                  <label>
                    <span className={styles['response__label']}>Specify additional dietary requirements</span>
                    <Field
                      name="dietary_requirement_specifics"
                      type="text"
                      disabled={values.dietary_requirements !== 'Yes'}
                      tabIndex="0"
                    />
                  </label>
                  <ErrorMessage
                    component="div"
                    className={styles['response__error']}
                    name="dietary_requirement_specifics"
                  />
                </div>

                <button
                  className={styles['response__submit']}
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty || (status && status.success)}>
                  Submit
                </button>
              </Form>
            ) : (
              <ResponseFeedback status={status} actions={{ setStatus, resetForm }} />
            )}
          </>
        )
      }}
    </Formik>
  )
}
