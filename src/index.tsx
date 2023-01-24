import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import { useForm } from 'react-hook-form';

import {
    Authenticator,
    SwitchField,
    TextField,
    useAuthenticator,
} from '@aws-amplify/ui-react';
import {
    AppLayout,
    Container,
    Form,
    Header,
    SpaceBetween,
    Button,
} from '@awsui/components-react';

import { createCourse } from './graphql/mutations';
import { CreateCourseInput } from './API';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCourseInput>();
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [isLoading, setLoading] = useState(false);

    const addCourse = (data: CreateCourseInput) => {
        setLoading(true);

        const createCourseRequest: Promise<GraphQLResult<any>> = API.graphql({
            ...graphqlOperation(createCourse, { input: data }),
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        });

        createCourseRequest
            .then(() => {
                alert('Curso creado!');
            })
            .catch(() => alert('Hubo un error creando el curso'))
            .finally(() => setLoading(false));
    };

    return (
        <AppLayout
            navigation={
                <>
                    <SpaceBetween direction="vertical" size="l">
                        <h1>Cursos</h1>
                        <Button onClick={signOut} variant="primary">
                            Cerrar Sesión
                        </Button>
                    </SpaceBetween>
                </>
            }
            content={
                <Form
                    actions={
                        <Button
                            loading={isLoading}
                            formAction="submit"
                            onClick={() => handleSubmit(addCourse)()}
                            variant="primary"
                        >
                            Crear curso
                        </Button>
                    }
                >
                    <SpaceBetween direction="vertical" size="l">
                        <Container
                            header={
                                <Header variant="h3">
                                    Completa el siguiente formulario y añade las variantes:
                                </Header>
                            }
                        >
                            <SpaceBetween direction="vertical" size="l">
                                <TextField
                                    label="Nombre"
                                    placeholder="Curso"
                                    {...register('name', { required: true })}
                                    hasError={errors.name && true}
                                    errorMessage="El curso deberia ser nombrado"
                                />
                                <TextField
                                    label="Competencias"
                                    {...register('skills', { required: true })}
                                    hasError={errors.skills && true}
                                    errorMessage="Añade una competencia"
                                />
                                <TextField
                                    label="Thumbnail URL"
                                    {...register('thumbnail', { required: true })}
                                    hasError={errors.thumbnail && true}
                                    errorMessage="Añade un thumbnail"
                                />
                                <TextField
                                    label="Imagenes URLs"
                                    {...register('images', { required: true })}
                                    hasError={errors.images && true}
                                    errorMessage="Añade al menos una imagen URL"
                                />
                                <TextField
                                    label="Descripción"
                                    placeholder="Cotton T-shirts"
                                    {...register('description', { required: true })}
                                    hasError={errors.description && true}
                                    errorMessage="descripción"
                                />
                                <SwitchField
                                    label="Curso disponible"
                                    labelPosition="start"
                                    {...register('available', { required: true })}
                                    isChecked={true}
                                />
                                <SwitchField
                                    label="El curso posee cupo ilimitado"
                                    labelPosition="start"
                                    {...register('unlimited', { required: true })}
                                    isChecked={false}
                                />

                                <TextField
                                    label="Limite de participantes"
                                    {...register('limit', {
                                        required: true,
                                        min: 0,
                                        max: 100,
                                    })}
                                    hasError={errors.limit && true}
                                    errorMessage="Especifique el límite"
                                />
                            </SpaceBetween>
                        </Container>
                    </SpaceBetween>
                </Form>
            }
        />
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Authenticator.Provider>
            <Authenticator>
                <App />
            </Authenticator>
        </Authenticator.Provider>
    </React.StrictMode>
);