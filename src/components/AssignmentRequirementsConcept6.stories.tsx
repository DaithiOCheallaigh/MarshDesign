import type { Meta, StoryObj } from '@storybook/react';
import AssignmentRequirementsConcept6 from './AssignmentRequirementsConcept6';

const meta: Meta<typeof AssignmentRequirementsConcept6> = {
  title: 'Concepts/AssignmentRequirementsConcept6',
  component: AssignmentRequirementsConcept6,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AssignmentRequirementsConcept6>;

/** 1. Default — no member selected, empty right panel */
export const Default: Story = { args: { variant: 'default' } };

/** 2. Member selected — Sarah Brennan picked, roles shown with empty chairs */
export const MemberSelected: Story = { args: { variant: 'member-selected' } };

/** 3. Chair assigned — Primary chair filled for Senior Account Manager role */
export const ChairAssigned: Story = { args: { variant: 'chair-assigned' } };

/** 4. All roles assigned — All 3 roles have chairs, Assign button active */
export const AllRolesAssigned: Story = { args: { variant: 'all-assigned' } };

/** 5. Saving — Assign clicked, saving in progress */
export const Saving: Story = { args: { variant: 'saving' } };

/** 6. Success — Assignments saved successfully */
export const Success: Story = { args: { variant: 'success' } };

/** 7. Error — Save failed, error state shown */
export const Error: Story = { args: { variant: 'error' } };

/** 8. Search active — Member search filtering list to "james" */
export const SearchActive: Story = { args: { variant: 'search' } };

/** 9. Low capacity warning — Patrick Daly selected with 10% capacity */
export const LowCapacityWarning: Story = { args: { variant: 'low-capacity' } };

/** 10. Notes expanded — Notes textarea open on first role card */
export const NotesExpanded: Story = { args: { variant: 'notes' } };

/** 11. Complete Work Item modal — confirmation dialog open */
export const CompleteWorkItemModal: Story = { args: { variant: 'modal' } };
