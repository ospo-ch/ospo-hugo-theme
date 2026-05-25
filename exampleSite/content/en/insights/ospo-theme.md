---
title: OSPO Hugo Theme
description: A theme for the Hugo CMS to launch an OSPO
params:
  org_name: ospo.ch
  repository: https://github.com/ospo-ch/ospo-hugo-theme
  score:
    aggregate: 63
    documentation: 70
    license: 75
    best_practices: 26
    security: 45
    legal: 100
  repositories:
    - name: ospo-hugo-theme
      score:
        documentation: 70
        license: 75
        best_practices: 26
        security: 45
        legal: 100
        global: 63
      documentation:
        adopters:
          id: adopters
          title: Adopters
          description: List of organizations using this project in production or at stages of testing
          passed: false
        changelog:
          id: changelog
          title: Changelog
          description: A curated, chronologically ordered list of notable changes for each version
          passed: true
        code_of_conduct:
          id: code_of_conduct
          title: Code of conduct
          description: Adopt a code of conduct to define community standards and outline procedures for handling abuse
          passed: true
        contributing:
          id: contributing
          title: Contributing
          description: A contributing file provides potential contributors with a short guide to how they can help
          passed: true
        governance:
          id: governance
          title: Governance
          description: Document that explains how the governance and committer process works in the repository
          passed: false
        maintainers:
          id: maintainers
          title: Maintainers
          description: The maintainers file contains a list of the current maintainers for the repository
          passed: false
        readme:
          id: readme
          title: Readme
          description: The readme file introduces and explains a project
          passed: true
        roadmap:
          id: roadmap
          title: Roadmap
          description: Defines the high-level overview of the project's goals and deliverables
          passed: false
        website:
          id: website
          title: Website
          description: A url that users can visit to learn more about your project
          passed: true
      license:
        license_file_exists:
          id: license_file_exists
          title: License
          description: The LICENSE file contains the repository license
          passed: true
          value: Apache-2.0
        license_approved:
          id: license_approved
          title: Compliance
          description: The license is approved within the organization
          passed: true
        license_scanning:
          id: license_scanning
          title: License scanning
          description: Automatically identify, manage and address open source licensing issues
          passed: false
      best_practices:
        cla:
          id: cla
          title: Contributor License Agreement
          description: Defines the terms under which intellectual property has been contributed to a project
          passed: false
        dco:
          id: dco
          title: Developer Certificate of Origin
          description: Mechanism for contributors to certify that they wrote or have the right to submit the code
          passed: true
        github_discussions:
          id: github_discussions
          title: GitHub Discussions
          description: GitHub Discussions enable better collaboration on the project
          passed: false
        openssf_badge:
          id: openssf_badge
          title: OpenSSF Badge
          description: The OpenSSF Best Practices badge shows that the project follows best practices
          passed: false
        openssf_scorecard_badge:
          id: openssf_scorecard_badge
          title: Scorecard Badge
          description: Scorecard assesses open source projects for security risks through automated checks
          passed: false
        recent_release:
          id: recent_release
          title: Recent Release
          description: The project should have released at least one version in the last year
          passed: true
        chat_presence:
          id: chat_presence
          title: Messaging support available
          description: A messaging platform allows to build up the community for the project
          passed: false
        pull_request_template:
          id: pull_request_template
          title: Pull Request Template
          description: A Pull Request template speeds up the approval process
          passed: false
        issue_template:
          id: issue_template
          title: Issue Template
          description: An Issue template helps with filing bugs on the project
          passed: false
      security:
        binary_artifacts:
          id: binary_artifacts
          title: Binary artifacts
          description: This check determines whether the project has generated executable artifacts in the source repository
          passed: true
        code_review:
          id: code_review
          title: Code Review
          description: This check determines whether the project requires code review before pull requests are merged
          passed: true
        dangerous_workflow:
          id: dangerous_workflow
          title: Dangerous Workflow
          description: This check determines whether the project's GitHub Action workflows has dangerous code patterns
          passed: true
        dependency_policy:
          id: dependency_policy
          title: Dependency Policy
          description: Project should provide a dependencies policy that describes how dependencies are consumed and updated
          passed: false
        dependency_update_tool:
          id: dependency_update_tool
          title: Dependency Update Tool
          description: This check tries to determine if the project uses a dependency update tool
          passed: true
        maintained:
          id: maintained
          title: Maintained
          description: This check determines whether the project is actively maintained
          passed: true
        security_policy:
          id: security_policy
          title: Security Policy
          description: Clearly documented security processes explaining how to report security issues
          passed: true
        signed_releases:
          id: signed_releases
          title: Signed Release
          description: This check tries to determine if the project cryptographically signs release artifacts
          passed: false
        sbom:
          id: sbom
          title: Software Bill of Materials
          description: List of components in a piece of software, including licenses, versions, etc.
          passed: false
        token_permissions:
          id: token_permissions
          title: Token Permissions
          description: This check determines whether the project's automated workflow tokens are set to read-only by default
          passed: false
      legal:
        trademark_disclaimer:
          id: trademark_disclaimer
          title: Trademark
          description: A trademark should be applied to protect intellectual property
          passed: false
---
