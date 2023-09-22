// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client';

export type Path =
  | `/`
  | `/kitchen-sink`
  | `/react-hook-form-zod`
  | `/react-router-generouted`
  | `/redux-toolkit`
  | `/rtk-query`
  | `/rtk-query/:id`;

export type Params = {
  '/rtk-query/:id': { id: string };
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
