// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/kitchen-sink`
  | `/react-hook-form-zod`
  | `/react-query`
  | `/react-query/:id`
  | `/react-query/DeleteButton`
  | `/react-router-generouted`;

export type Params = {
  '/react-query/:id': { id: string };
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
