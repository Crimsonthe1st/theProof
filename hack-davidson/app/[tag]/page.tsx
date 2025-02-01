/**
 * Speeds up dyanmic route segments. Think about this later! Check bookmarks "static-params".
 */
// function generateStaticParams() { }

/**
 * DATABASE!
 */
// const problems = [
//   {
//     title: 'Sums',
//     description: 'Adding numbers together',
//     difficulty: '2.2',
//     accuracy: 85,
//     statement: 'Adding two numbers together is called a \textbf{sum}. \
//                 We can describe the sum of multiple numbers using $\sum$-notation, also called a \textbf{summation}. \
//                 For example, $$\sum_{i=1}^n x_i = x_1 + x_2 + \dots + x_{n - 1} + x_n.$$ \
//                 \
//                 Evaluate the following summation: $$\sum_{ i=1 } ^ 5 = x_i ^ 2.$$',
//     free_response: false,
//     answers: [55]
//   },
//   {
//     title: 'Determination',
//     description: 'Is it invertible?',
//     difficulty: 3.5,
//     accuracy: 54,
//     statement: 'Suppose we have the matrix \
//                 \[ \
//                 A = \
//                 \begin{pmatrix} \
//                     a & b \\ \
//                     c & d \
//                 \end{pmatrix} = \
//                 \begin{pmatrix} \
//                     1 & 4 \\ \
//                     5 & 6 \
//                 \end{pmatrix}. \
//                 \] \
//                 \
//                 Is $A$ invertible, i.e. $\text{det}(A) = (ad - bc) \neq 0?$',
//     free_response: false,
//     answers: ['yes'], // remove case check?
//   },
//   {
//     title: 'Conditioning',
//     desciption: 'Indepdence and dependence!',
//     difficulty: 5.5,
//     accuracy: 31,
//     statement: 'Two events, $A$ and $B$, are \textbf{independent} if $$P(A \cap B) = P(A)P(B).$$ \
//                 We also know that the probability $A$ occurs given $B$ is $$P(A \mid B) = \dfrac{P(A \cap B)}{P(B)},$$ \
//                 which is called $\textbf{conditional probability}$. \
//                 If $A$ and $B$ are independent, what is $P(A \mid B)$?',
//     free_response: true
//   }
// ]

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const tag = (await params).tag
  return <h1>Problem page: {tag}</h1>
}