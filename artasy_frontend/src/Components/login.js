import { Button, Form } from "semantic-ui-react"

export default function Login() {
	return(
		<div style={{ padding: "100px 0", textAlign: "center"}}>
			<Form>
				<Form.Field inline>
					<input type="email" placeholder="Email" />
				</Form.Field>
				<Form.Field inline>
					<input type="password" placeholder="Password" />
				</Form.Field>
				<Button color="blue">Login</Button>
			</Form>
		</div>
	)
}